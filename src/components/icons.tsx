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
