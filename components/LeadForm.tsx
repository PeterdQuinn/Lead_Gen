'use client'

import { useState } from 'react'

interface Props {
  calendlyUrl: string
}

export default function LeadForm({ calendlyUrl }: Props) {
  const [form, setForm] = useState({
    firstName: '',
    email: '',
    phone: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10)
    if (digits.length >= 7) return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6)}`
    if (digits.length >= 4) return `(${digits.slice(0,3)}) ${digits.slice(3)}`
    if (digits.length >= 1) return `(${digits}`
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.firstName.trim()) newErrors.firstName = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email required'
    if (!form.phone || form.phone.replace(/\D/g, '').length < 10)
      newErrors.phone = 'Valid phone required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      return
    }

    setLoading(true)
    await new Promise((r) => setTimeout(r, 500))
    setLoading(false)
    setSubmitted(true)

    setTimeout(() => {
      window.open(calendlyUrl, '_blank', 'noopener,noreferrer')
    }, 400)
  }

  if (submitted) {
    return (
      <div className="text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-display font-bold text-[#1A1A2E] mb-2">You're booked!</h3>
        <p className="text-[#5A5A72] mb-6">
          Your calendar is opening now. Pick a time that works.
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-3 rounded-xl hover:bg-[#E8C97A] transition-colors"
        >
          Book Now →
        </a>
      </div>
    )
  }

  const inputClass = (field: string) =>
    `w-full bg-[#F8F8F8] border rounded-lg px-4 py-3 text-[#1A1A2E] text-sm placeholder-[#B0B0C0] outline-none transition-all focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent ${
      errors[field] ? 'border-red-400' : 'border-[#E0DDD6]'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
          Your Name
        </label>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="John"
          className={inputClass('firstName')}
        />
        {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className={inputClass('email')}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className={inputClass('phone')}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C9A84C] hover:bg-[#E8C97A] disabled:opacity-60 text-[#1A1A2E] font-bold py-4 rounded-lg transition-all duration-200 active:scale-[0.99] text-lg"
      >
        {loading ? 'Getting calendar…' : 'Book Free Review →'}
      </button>

      <p className="text-center text-xs text-[#9A9A9A]">
        No spam. Just your calendar.
      </p>
    </form>
  )
}
