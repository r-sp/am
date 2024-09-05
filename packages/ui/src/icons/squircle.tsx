interface Icons {
  color: {
    dark: string;
    light: string;
  };
  size: number;
}

export default function IconSquircle({ color: { dark, light }, size }: Icons) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={size} height={size} rx="8" fill="url(#squircle-icon)" />
      <defs>
        <linearGradient id="squircle-icon" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor={dark} />
          <stop offset="1" stopColor={light} />
        </linearGradient>
      </defs>
    </svg>
  );
}
