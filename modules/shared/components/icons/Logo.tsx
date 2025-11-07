interface LogoProps {
  fill?: string;
  width?: number;
  height?: number;
}

export default function Logo({ fill = "#3461FF", width = 120, height = 40 }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="120" height="40" rx="4" fill={fill} />
      <text
        x="60"
        y="25"
        fontSize="18"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        LOGO
      </text>
    </svg>
  );
}
