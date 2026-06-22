'use client'

import { useState } from 'react'

interface Props {
  calendlyUrl: string
}

const incomeRanges = [
  'Under $150,000',
  '$150,000 – $250,000',
  '$250,000 – $500,000',
  '$500,000 – $1,000,000',
  '$1,000,000+',
]

const assetRanges = [
  'None',
  'Under $100,000',
  '$100,000 – $500,000',
  '$500,000 – $1,000,000',
  '$1,000,000 – $3,000,000',
  '$3,000,000+',
]

const concerns = [
  'Taxes',
  'Retirement Income',
  'Market Risk',
  'Estate Planning',
  'Liquidity',
]

const labelClass = 'block text-sm font-semibold text-[#1A1A2E] mb-2'

// Defined at module scope (not inside the component) so their identity is
// stable across renders, otherwise every keystroke would remount the inputs
// and the field would lose focus.
function Field({
  label,
  children,
  error,
}: {
  label: string
  children: React.ReactNode
  error?: string
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs uppercase tracking-[0.2em] text-[#C9A84C] font-bold border-b border-[#E0DDD6] pb-2">
      {children}
    </h3>
  )
}

type FormState = {
  // Personal
  name: string
  email: string
  phone: string
  age: string
  income: string
  householdIncome: string
  occupation: string
  businessOwner: string
  // Assets
  balance401k: string
  ira: string
  brokerage: string
  realEstate: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  age: '',
  income: '',
  householdIncome: '',
  occupation: '',
  businessOwner: '',
  balance401k: '',
  ira: '',
  brokerage: '',
  realEstate: '',
}

export default function HighEarnerForm({ calendlyUrl }: Props) {
  const [form, setForm] = useState<FormState>(initialState)
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Web3Forms access key, set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local.
  // Get a free key (no signup) at https://web3forms.com.
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 10)
    if (digits.length >= 7) return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
    if (digits.length >= 4) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    if (digits.length >= 1) return `(${digits}`
    return ''
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (name === 'phone') {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern) ? prev.filter((c) => c !== concern) : [...prev, concern],
    )
  }

  // Only contact details are required so the form never feels like a wall.
  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Valid email required'
    if (!form.phone || form.phone.replace(/\D/g, '').length < 10)
      newErrors.phone = 'Valid phone required'
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    const validation = validate()
    if (Object.keys(validation).length > 0) {
      setErrors(validation)
      document.getElementById('assessment-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New High Income Strategy Assessment, ${form.name}`,
          from_name: 'High Income Strategy Assessment',
          // Personal
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Age: form.age,
          'Personal income': form.income,
          'Household income': form.householdIncome,
          Occupation: form.occupation,
          'Business owner': form.businessOwner,
          // Assets
          '401(k)': form.balance401k,
          IRA: form.ira,
          Brokerage: form.brokerage,
          'Real estate': form.realEstate,
          // Concerns
          'Primary concerns': selectedConcerns.join(', ') || 'None selected',
        }),
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message || 'Submission failed')
      setSubmitted(true)
      document.getElementById('assessment-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } catch {
      setSubmitError(
        'Something went wrong sending your assessment. Please try again, or contact us directly.',
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div id="assessment-card" className="text-center py-6">
        <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#C9A84C]/15 text-[#C9A84C] flex items-center justify-center">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-display tracking-wide text-[#1A1A2E] mb-3">
          Your Assessment Has Been Received
        </h3>
        <p className="text-[#5A5A72] text-base md:text-lg max-w-lg mx-auto mb-7 leading-relaxed">
          Based on your responses, the next step is a strategy review to determine whether
          opportunities exist within your current retirement, tax, and wealth structure.
        </p>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C9A84C] text-[#1A1A2E] font-bold px-8 py-4 rounded-xl hover:bg-[#E8C97A] transition-colors text-lg"
        >
          Schedule Your Strategy Session →
        </a>
      </div>
    )
  }

  const inputClass = (field: string) =>
    `w-full bg-[#F8F8F8] border rounded-lg px-4 py-3 text-[#1A1A2E] text-sm placeholder-[#B0B0C0] outline-none transition-all focus:ring-2 focus:ring-[#C9A84C] focus:border-transparent ${
      errors[field] ? 'border-red-400' : 'border-[#E0DDD6]'
    }`

  return (
    <form id="assessment-card" onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* PERSONAL */}
      <fieldset className="space-y-4">
        <SectionTitle>Personal</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Name" error={errors.name}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass('name')} />
          </Field>
          <Field label="Email" error={errors.email}>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass('email')} />
          </Field>
          <Field label="Phone" error={errors.phone}>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000" className={inputClass('phone')} />
          </Field>
          <Field label="Age">
            <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="45" min="18" max="100" className={inputClass('age')} />
          </Field>
          <Field label="Personal income">
            <select name="income" value={form.income} onChange={handleChange} className={inputClass('income')}>
              <option value="">Select…</option>
              {incomeRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Household income">
            <select name="householdIncome" value={form.householdIncome} onChange={handleChange} className={inputClass('householdIncome')}>
              <option value="">Select…</option>
              {incomeRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Occupation">
            <input type="text" name="occupation" value={form.occupation} onChange={handleChange} placeholder="e.g. Physician, Engineer" className={inputClass('occupation')} />
          </Field>
          <Field label="Business owner?">
            <select name="businessOwner" value={form.businessOwner} onChange={handleChange} className={inputClass('businessOwner')}>
              <option value="">Select…</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
        </div>
      </fieldset>

      {/* ASSETS */}
      <fieldset className="space-y-4">
        <SectionTitle>Assets</SectionTitle>
        <p className="text-sm text-[#5A5A72] -mt-1">Approximate ranges are fine.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="401(k)">
            <select name="balance401k" value={form.balance401k} onChange={handleChange} className={inputClass('balance401k')}>
              <option value="">Select…</option>
              {assetRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="IRA">
            <select name="ira" value={form.ira} onChange={handleChange} className={inputClass('ira')}>
              <option value="">Select…</option>
              {assetRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Brokerage">
            <select name="brokerage" value={form.brokerage} onChange={handleChange} className={inputClass('brokerage')}>
              <option value="">Select…</option>
              {assetRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Real estate">
            <select name="realEstate" value={form.realEstate} onChange={handleChange} className={inputClass('realEstate')}>
              <option value="">Select…</option>
              {assetRanges.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
        </div>
      </fieldset>

      {/* CONCERNS */}
      <fieldset className="space-y-4">
        <SectionTitle>Primary Concerns</SectionTitle>
        <p className="text-sm text-[#5A5A72] -mt-1">Select all that apply.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {concerns.map((concern) => {
            const checked = selectedConcerns.includes(concern)
            return (
              <label
                key={concern}
                className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-all ${
                  checked
                    ? 'border-[#C9A84C] bg-[#C9A84C]/10'
                    : 'border-[#E0DDD6] bg-[#F8F8F8] hover:border-[#C9A84C]/50'
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleConcern(concern)}
                  className="w-4 h-4 accent-[#C9A84C]"
                />
                <span className="text-sm text-[#1A1A2E] font-medium">{concern}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      {submitError && (
        <p className="text-center text-red-500 text-sm font-medium">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#C9A84C] hover:bg-[#E8C97A] disabled:opacity-60 text-[#1A1A2E] font-bold py-4 rounded-lg transition-all duration-200 active:scale-[0.99] text-lg"
      >
        {loading ? 'Submitting…' : 'Submit Assessment'}
      </button>

      <p className="text-center text-xs text-[#9A9A9A]">
        Your information is confidential and used only to prepare for your strategy review.
      </p>
    </form>
  )
}
