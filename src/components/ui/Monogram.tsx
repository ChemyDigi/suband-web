/**
 * Brand mark: a brass ring with a trophy-cup silhouette cut from it.
 * The ring is the recurring motif used throughout the site.
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      {/* cup */}
      <path
        d="M22 18h20v8c0 6-4.5 10-10 10s-10-4-10-10v-8Z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill="none"
      />
      <path d="M22 21h-4c0 5 2 8 5 9" stroke="currentColor" strokeWidth="1.1" />
      <path d="M42 21h4c0 5-2 8-5 9" stroke="currentColor" strokeWidth="1.1" />
      <path d="M32 36v6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M26 46h12" stroke="currentColor" strokeWidth="1.3" />
      <path d="M28 42h8" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  );
}
