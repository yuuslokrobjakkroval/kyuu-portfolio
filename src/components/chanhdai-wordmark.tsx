export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 80"
      width={props.width || 480}
      height={props.height || 80}
      {...props}
    >
      {/* K */}
      <path
        fill="currentColor"
        d="M20 10h16v24l20-24h20l-24 28 26 32h-22l-20-26v26H20V10z"
      />
      {/* Y */}
      <path
        fill="currentColor"
        d="M90 10h18l14 26 14-26h18l-24 44v26h-16v-26L90 10z"
      />
      {/* space */}
      {/* K */}
      <path
        fill="currentColor"
        d="M180 10h16v24l20-24h20l-24 28 26 32h-22l-20-26v26h-16V10z"
      />
      {/* Y */}
      <path
        fill="currentColor"
        d="M250 10h18l14 26 14-26h18l-24 44v26h-16v-26l-24-44z"
      />
      {/* U */}
      <path
        fill="currentColor"
        d="M320 10h16v44c0 8 4 12 12 12s12-4 12-12V10h16v44c0 18-12 28-28 28s-28-10-28-28V10z"
      />
      {/* U */}
      <path
        fill="currentColor"
        d="M380 10h16v44c0 8 4 12 12 12s12-4 12-12V10h16v44c0 18-12 28-28 28s-28-10-28-28V10z"
      />
    </svg>
  );
}
