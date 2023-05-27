export default function SearchBasic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{
      fill: "none",
      strokeWidth: 5,
      overflow: "visible",
    }}
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11zm8-3 9 9" />
  </svg>
  );
}
