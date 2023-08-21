import { Icon } from "./IconType";

const FlagIcon = ({ className }: Icon) => {
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
        d="M19 4H6V2H4V20H3V22H7V20H6V15H19C19.2652 15 19.5196 14.8946 19.7071 14.7071C19.8946 14.5196 20 14.2652 20 14V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4ZM18 13H6V6H18V13Z"
        // fill="#32475C"
        fill-opacity="0.6"
      />
    </svg>
  );
};

export default FlagIcon;
