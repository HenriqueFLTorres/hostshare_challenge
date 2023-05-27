export default function Hamburguer(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      style={{
        display: 'block',
        fill: 'none',
        height: 16,
        width: 16,
        stroke: 'currentcolor',
        strokeWidth: 3,
      }}
      viewBox='0 0 32 32'
      {...props}
    >
      <path d='M2 16h28M2 24h28M2 8h28' />
    </svg>
  );
}
