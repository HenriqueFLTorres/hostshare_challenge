export default function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={32}
      height={32}
      aria-hidden='true'
      style={{
        display: 'block',
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: 3,
        overflow: 'visible',
      }}
      viewBox='0 0 32 32'
      {...props}
    >
      <path stroke='#222' d='m6 6 20 20M26 6 6 26' />
    </svg>
  );
}
