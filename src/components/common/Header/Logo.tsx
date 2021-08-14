import { Link } from "react-router-dom";

export const LOGO = (props: { className?: any }) => {
  return (
    <Link to="/" className={"pr-2 text-2xl " + props.className || ""}>
      Deck<span className="text-red-500">.</span>
    </Link>
  );
};
