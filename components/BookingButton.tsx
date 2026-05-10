'use client'

interface BookingButtonProps {
  url: string
  label: string
  primary?: boolean
  light?: boolean
  dark?: boolean
  small?: boolean
  fullWidth?: boolean
}

export default function BookingButton({
  url,
  label,
  primary,
  light,
  dark,
  small,
  fullWidth,
}: BookingButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer text-center'

  const size = small
    ? 'px-4 py-2 text-sm'
    : 'px-8 py-4 text-base'

  let variant = ''
  if (primary && light) {
    variant = 'bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#E8C97A]'
  } else if (primary) {
    variant = 'bg-[#C9A84C] text-[#1A1A2E] hover:bg-[#E8C97A] shadow-lg shadow-[#C9A84C]/20'
  } else if (dark) {
    variant = 'bg-[#1A1A2E] text-white hover:bg-[#2A2A3E]'
  } else {
    variant = 'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#1A1A2E]'
  }

  const width = fullWidth ? 'w-full' : ''

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${size} ${variant} ${width}`}
    >
      {label}
    </a>
  )
}
