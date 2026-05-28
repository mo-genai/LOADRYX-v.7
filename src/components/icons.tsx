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

/* Stable in-game performance — steady speedometer */
export function PerformanceIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 16.5a8 8 0 1 1 16 0" />
      <path d="M12 16.5 15.5 12" />
    </svg>
  )
}

/* Technical support — headset */
export function SupportIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
      <rect x="3.5" y="13" width="3.2" height="5.2" rx="1.3" />
      <rect x="17.3" y="13" width="3.2" height="5.2" rx="1.3" />
      <path d="M19 18.2v.3a2.8 2.8 0 0 1-2.8 2.8H13" />
    </svg>
  )
}

/* Continuous updates — sync arrows */
export function UpdatesIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4.5 9a7.5 7.5 0 0 1 12.7-2.6L20 9" />
      <path d="M19.5 15a7.5 7.5 0 0 1-12.7 2.6L4 15" />
      <path d="M20 4.5V9h-4.5" />
      <path d="M4 19.5V15h4.5" />
    </svg>
  )
}

/* Security & privacy — shield with check */
export function SecurityIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3 5 6v5c0 4.6 3 7.7 7 9 4-1.3 7-4.4 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

/* Direct activation — play in a circle (start / go live) */
export function ActivationIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5V8.5Z" />
    </svg>
  )
}

/* Service warranty — award medal */
export function WarrantyIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9.7 9 1.6 1.6L14.4 7.6" />
      <path d="M8.8 13.8 7.4 20.5l4.6-2.5 4.6 2.5-1.4-6.7" />
    </svg>
  )
}

export function MenuIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function PlayCircleIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5 16 12l-6 3.5V8.5Z" />
    </svg>
  )
}

export function BoxIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M21 7.5 12 3 3 7.5v9L12 21l9-4.5v-9Z" />
      <path d="M3 7.5 12 12l9-4.5M12 12v9" />
    </svg>
  )
}

export function MonitorIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
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
