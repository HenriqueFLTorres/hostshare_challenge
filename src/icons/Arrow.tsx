export default function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      style={{
        display: 'block',
        fill: 'none',
        stroke: 'currentcolor',
        strokeWidth: 5,
        overflow: 'visible',
      }}
      width={16}
      height={16}
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M20 28 8.707 16.707a1 1 0 0 1 0-1.414L20 4' />
    </svg>
  );
}
