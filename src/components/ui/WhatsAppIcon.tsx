import type { SVGProps } from "react";

export default function WhatsAppIcon({
  size = 20,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-17.47 3.06L3 21l6.12-1.5A9 9 0 0 1 21 12Z" />
      <path d="M8.5 9.5c0 4 3 7 7 7l1.5-1.5-2-1-1 .5c-1.5-.5-3-2-3.5-3.5l.5-1-1-2L8.5 9.5Z" />
    </svg>
  );
}
