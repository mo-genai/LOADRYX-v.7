import type { SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement>

/* Brand mark — stylized "N" with a connecting curve.
   Geometric, single-weight stroke, currentColor. */
export function NimbusLogo({ size = 44, ...rest }: Props & { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 50 V20 C12 14.5 16 12 22 18 L42 44 V14"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 14 C49 14 53 17 53 24 C53 31 49 34 42 34"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* Compact mark for header/footer */
export function NimbusMark({ size = 32, ...rest }: Props & { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M12 50 V20 C12 14.5 16 12 22 18 L42 44 V14"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 14 C49 14 53 17 53 24 C53 31 49 34 42 34"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ShieldIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 4 6v5c0 5 3.6 8.8 8 10 4.4-1.2 8-5 8-10V6l-8-3Z" />
    </svg>
  )
}
export function SparklesIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
export function LockIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  )
}
export function CodeIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
export function ThumbIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M7 10v11M7 10l4-7c1.6 0 2.6 1.3 2.4 3l-.7 3h5.2c1.6 0 2.7 1.5 2.3 3l-1.6 6c-.3 1.2-1.4 2-2.6 2H7" />
    </svg>
  )
}
export function ShieldCoinsIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="9" cy="12" r="4" />
      <circle cx="15" cy="14" r="4" />
    </svg>
  )
}
export function TrophyIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Z" />
      <path d="M4 5h4v3a4 4 0 0 1-4-4V5ZM16 5h4v-1a4 4 0 0 1-4 4V5Z" />
      <path d="M10 13v3h4v-3M8 20h8" />
    </svg>
  )
}
export function UsersIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M3.5 19c.6-3 3.1-5 5.5-5s4.9 2 5.5 5M14.5 19c.4-2.2 2-3.6 3.5-3.6 1.5 0 3.1 1.4 3.5 3.6" />
    </svg>
  )
}
export function ShieldCheckIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 4 6v5c0 5 3.6 8.8 8 10 4.4-1.2 8-5 8-10V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
export function ArrowRightIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
export function CheckCircleIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.7-4.7" />
    </svg>
  )
}
export function BoltIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
    </svg>
  )
}
export function ChatBubbleIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 12c0 4-4 7-9 7-1.2 0-2.3-.2-3.4-.5L3 20l1.5-4.5C3.6 14.4 3 13.2 3 12c0-4 4-7 9-7s9 3 9 7Z" />
    </svg>
  )
}
export function GlobeIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 3 4 6 4 9s-1.5 6-4 9c-2.5-3-4-6-4-9s1.5-6 4-9Z" />
    </svg>
  )
}

/* -------------------------------------------------------------------------- */
/* "طريقة التفعيل" card glyphs — one cohesive 24px line set (1.6 stroke,       */
/* round caps/joins, currentColor) so they read as a single family.           */
/* -------------------------------------------------------------------------- */

/* Stable in-game performance — speedometer holding steady */
export function PerformanceIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 17.5a8 8 0 1 1 14 0" />
      <path d="M12 17.5 16 11" />
      <circle cx="12" cy="17.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

/* Technical support — headset */
export function SupportIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13a2 2 0 0 1 2-2h1v6H6a2 2 0 0 1-2-2v-2Z" />
      <path d="M20 13a2 2 0 0 0-2-2h-1v6h1a2 2 0 0 0 2-2v-2Z" />
      <path d="M20 17v.5a3 3 0 0 1-3 3h-4" />
    </svg>
  )
}

/* Continuous updates — sync arrows */
export function UpdatesIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M20 8a8 8 0 0 0-14.5-1" />
      <path d="M4 16a8 8 0 0 0 14.5 1" />
      <path d="M20 4v4h-4M4 20v-4h4" />
    </svg>
  )
}

/* Security & privacy — shield with keyhole */
export function SecurityIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 5 6v5c0 4.6 3 7.7 7 9 4-1.3 7-4.4 7-9V6l-7-3Z" />
      <circle cx="12" cy="10.5" r="1.6" />
      <path d="M12 12.1V15" />
    </svg>
  )
}

/* Direct activation — power button */
export function ActivationIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3.5v7.5" />
      <path d="M7.6 6.6a7 7 0 1 0 8.8 0" />
    </svg>
  )
}

/* Service warranty — award medal with check */
export function WarrantyIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="9" r="6" />
      <path d="m9.2 9 1.9 1.9L15 7.4" />
      <path d="M8.7 14.3 7.3 21l4.7-2.6L16.7 21l-1.4-6.7" />
    </svg>
  )
}

export function ChevronDownIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function PhoneIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6.6 3.5 9 3.8l1.2 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.2.3 2.4a2 2 0 0 1-2 2.3A16 16 0 0 1 4.3 5.5a2 2 0 0 1 2.3-2Z" />
    </svg>
  )
}

export function WhatsAppIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3.5 20.5 5 16.2a8 8 0 1 1 2.8 2.8L3.5 20.5Z" />
      <path d="M8.6 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.3.4-.1.7a5.5 5.5 0 0 0 2.6 2.3c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.2.1.3.3.3.5a1.7 1.7 0 0 1-1.2 1.6c-.7.2-1.6.2-3.4-.6a8 8 0 0 1-3.6-3.6c-.7-1.5-.6-2.4-.3-3.4Z" />
    </svg>
  )
}
