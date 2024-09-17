interface Props {
  className: string;
  color: string;
  size: number;
}

export default function IconMenu({ className, color, size }: Props) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 23C6 22.4477 6.44772 22 7 22H25C25.5523 22 26 22.4477 26 23C26 23.5523 25.5523 24 25 24H7C6.44772 24 6 23.5523 6 23Z"
          fill={color}
        ></path>
        <path
          d="M6 16C6 15.4477 6.44772 15 7 15H25C25.5523 15 26 15.4477 26 16C26 16.5523 25.5523 17 25 17H7C6.44772 17 6 16.5523 6 16Z"
          fill={color}
        ></path>
        <path
          d="M6 9C6 8.44772 6.44772 8 7 8H25C25.5523 8 26 8.44772 26 9C26 9.55228 25.5523 10 25 10H7C6.44772 10 6 9.55228 6 9Z"
          fill={color}
        ></path>
      </svg>
    </div>
  );
}
