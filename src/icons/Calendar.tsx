export default function Calendar(props: React.SVGProps<SVGSVGElement>) {
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
        d='m11.667 0-.001 1.666h8.667V0h2v1.666h6a2 2 0 0 1 1.995 1.851l.005.15v15.919a2 2 0 0 1-.467 1.284l-.118.13L21 29.748a2 2 0 0 1-1.238.578l-.176.007H6.666a5 5 0 0 1-4.995-4.783l-.004-.217V3.667a2 2 0 0 1 1.85-1.995l.15-.005 5.999-.001V0zm16.666 11.666H3.667v13.667a3 3 0 0 0 2.823 2.995l.177.005h10.999v-5.666a5 5 0 0 1 4.784-4.996l.217-.004 5.666-.001zm-.081 8h-5.585a3 3 0 0 0-2.995 2.824l-.005.177-.001 5.586zm-18.586-16h-6v6h24.667v-6h-6v1.667h-2V3.666h-8.667v1.667h-2z'
      />
    </svg>
  );
}
