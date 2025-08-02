export default function Hamburger({
  width = "20",
  height = "20",
  color = "white",
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.27405 2.94043C6.491 2.72347 6.84276 2.72347 7.05972 2.94043L13.7264 9.60709C13.9433 9.82405 13.9433 10.1758 13.7264 10.3928L7.05972 17.0594C6.84276 17.2764 6.491 17.2764 6.27405 17.0594C6.05709 16.8425 6.05709 16.4907 6.27405 16.2738L12.5479 9.99993L6.27405 3.7261C6.05709 3.50914 6.05709 3.15739 6.27405 2.94043Z"
        fill={color}
      />
    </svg>
  );
}
