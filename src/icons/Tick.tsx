export default function Tick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      style={{
        display: 'block',
        fill: 'none',
        height: 16,
        width: 16,
        strokeWidth: 4,
        overflow: 'visible',
      }}
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='m4 16.5 8 8 16-16' />
    </svg>
  );
}
