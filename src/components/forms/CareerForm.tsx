'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { openings } from '@/lib/data'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  position: z.string().min(1),
  experience: z.string().min(1),
  message: z.string().min(10),
})
type FormData = z.infer<typeof schema>

export default function CareerForm() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async () => { setSent(true); reset(); setTimeout(() => setSent(false), 4000) }
  const input = 'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 outline-none'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <input {...register('name')} placeholder="Full Name *" className={input} />
        <input {...register('email')} placeholder="Email *" className={input} />
        <input {...register('phone')} placeholder="Phone *" className={input} />
        <input {...register('experience')} placeholder="Years of experience *" className={input} />
      </div>
      <select {...register('position')} className={input} defaultValue="">
        <option value="" disabled>Select position *</option>
        {openings.map((o) => <option key={o.title}>{o.title}</option>)}
      </select>
      <textarea {...register('message')} rows={4} placeholder="Tell us about yourself *" className={input} />
      {Object.values(errors).length > 0 && <p className="text-red-500 text-sm">Please fill all required fields.</p>}
      <button className="btn-primary w-full">{sent ? 'Application Submitted ✓' : 'Submit Application'}</button>
    </form>
  )
}
