interface Props {
  className: string;
  light: string;
  dark: string;
  size: number;
}

export default function IconCircle({ className, light, dark, size }: Props) {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="url(#circle-icon)" />
        <defs>
          <linearGradient
            id="circle-icon"
            x1="16"
            y1="0"
            x2="16"
            y2="32"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={dark} />
            <stop offset="1" stopColor={light} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
