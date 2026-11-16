'use client'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const MAX_COMPARE = 4
const STORAGE_KEY = 'versopick-compare'

type CompareContextValue = {
  ids: string[]
  isSelected: (id: string) => boolean
  toggle: (id: string) => void
  remove: (id: string) => void
  clear: () => void
  isFull: boolean
}

const CompareContext = createContext<CompareContextValue | null>(null)

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  // Restore the visitor's selection. Storage can be unavailable (private mode), so fail quietly.
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]')
      if (Array.isArray(saved)) setIds(saved.filter((v): v is string => typeof v === 'string').slice(0, MAX_COMPARE))
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids))
    } catch {}
  }, [ids, loaded])

  const toggle = useCallback(
    (id: string) =>
      setIds((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= MAX_COMPARE ? cur : [...cur, id])),
    []
  )
  const remove = useCallback((id: string) => setIds((cur) => cur.filter((x) => x !== id)), [])
  const clear = useCallback(() => setIds([]), [])

  const value = useMemo<CompareContextValue>(
    () => ({ ids, isSelected: (id) => ids.includes(id), toggle, remove, clear, isFull: ids.length >= MAX_COMPARE }),
    [ids, toggle, remove, clear]
  )

  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
}

export function useCompare() {
  const ctx = useContext(CompareContext)
  if (!ctx) throw new Error('useCompare must be used inside <CompareProvider>')
  return ctx
}
