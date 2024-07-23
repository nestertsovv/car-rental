import icons from "../../images/icons.svg";

interface Props {
  name: string;
  size?: number;
  className?: string;
  fill?: string;
  stroke?: string;
}

export const Icon = ({
  name,
  size = 24,
  className,
  fill = "none",
  stroke,
}: Props) => {
  return (
    <svg
      className={`${className}`}
      width={size}
      height={size}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${icons}#icon-${name}`} />
    </svg>
  );
};
