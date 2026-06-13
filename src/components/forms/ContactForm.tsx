'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(7, 'Phone is too short').optional().or(z.literal('')),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})
type FormData = z.infer<typeof schema>

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 5000)
  }

  const input = 'w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium mb-2 block">Full Name *</label>
          <input {...register('name')} className={input} placeholder="Jane Doe" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Email *</label>
          <input {...register('email')} className={input} placeholder="jane@company.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Phone</label>
          <input {...register('phone')} className={input} placeholder="+91 98765 43210" />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Company</label>
          <input {...register('company')} className={input} placeholder="Acme Inc." />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Interested in *</label>
        <select {...register('service')} className={input} defaultValue="">
          <option value="" disabled>Select a service</option>
          {['QA Automation', 'AI & ML', 'Web Development', 'Mobile App Development', 'DevOps', 'Cloud Solutions', 'IT Consulting', 'Other'].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
      </div>
      <div>
        <label className="text-sm font-medium mb-2 block">Message *</label>
        <textarea {...register('message')} rows={5} className={input} placeholder="Tell us about your project..." />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {sent ? <><CheckCircle className="w-4 h-4" /> Message Sent</> : <>Send Message <Send className="w-4 h-4" /></>}
      </button>
    </form>
  )
}
