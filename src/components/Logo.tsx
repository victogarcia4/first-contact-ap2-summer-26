/**
 * A small abstract "neuron / DNA strand" mark used in the navbar and footer.
 */
export function Logo({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M32 10c-6.5 0-10 4.2-10 9.6 0 4.4 3.2 7.4 3.2 11.9S21 37 21 42.4A11 11 0 0 0 43 42.4c0-5.4-4.2-6.4-4.2-10.9S42 24 42 19.6C42 14.2 38.5 10 32 10z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="32" cy="20" r="2.6" fill="currentColor" />
      <circle cx="25" cy="34" r="2.2" fill="currentColor" />
      <circle cx="39" cy="34" r="2.2" fill="currentColor" />
      <circle cx="32" cy="46" r="2.6" fill="currentColor" />
    </svg>
  );
}
