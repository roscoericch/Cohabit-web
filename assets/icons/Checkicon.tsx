import { Icon } from "./IconType";

const Checkicon = ({ className }: Icon) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15.586L6.70703 12.293L5.29303 13.707L10 18.414L19.707 8.70697L18.293 7.29297L10 15.586Z"
        fill="#32475C"
        fill-opacity="0.6"
      />
    </svg>
  );
};

export default Checkicon;
