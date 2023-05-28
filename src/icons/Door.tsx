export default function Door(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      style={{
        display: 'block',
        fill: 'currentcolor',
      }}
      viewBox='0 0 32 32'
      {...props}
    >
      <path
        fill='#222'
        d='M24.333 1.667a2 2 0 0 1 1.995 1.85l.005.15v24.666h3v2H2.667v-2h3V3.667a2 2 0 0 1 1.85-1.995l.15-.005zm-4 2H7.667l-.001 24.666h12.667zm4 0h-2v24.666h2zm-7 11a1.333 1.333 0 1 1 0 2.666 1.333 1.333 0 0 1 0-2.666z'
      />
    </svg>
  );
}
