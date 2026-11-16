import { notFound } from 'next/navigation'

// Any deeper, unknown path under /versopick (e.g. /versopick/kitchen/anything)
// shows the VERSOPICK 404 instead of falling through to the VersoTech one.
export default function UnknownVersoPickPath() {
  notFound()
}
