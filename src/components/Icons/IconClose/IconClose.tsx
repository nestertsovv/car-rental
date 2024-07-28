type Props = {
  size?: number;
  fill?: string;
  stroke?: string;
};

const IconClose = ({
  size = 14,
  fill = "none",
  stroke = "var(--black-color)",
}: Props) => {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L13 13"
          stroke={stroke}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconClose;
