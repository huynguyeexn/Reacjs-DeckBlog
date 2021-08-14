import { GrInstagram, GrTwitter, GrFacebookOption } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FOOTER_SOCIAL = () => {
  return (
    <div className="flex items-center space-x-4 md:ml-8 md:justify-end">
      <span>Follow us: </span>
      <Link
        to="https://www.instagram.com/"
        className="cursor-pointer hover:text-gray-500"
      >
        <GrInstagram></GrInstagram>
      </Link>
      <Link
        to="https://www.pinterest.com/"
        className="cursor-pointer hover:text-gray-500"
      >
        <FaPinterestP></FaPinterestP>
      </Link>
      <Link
        to="https://twitter.com/"
        className="cursor-pointer hover:text-gray-500"
      >
        <GrTwitter></GrTwitter>
      </Link>
      <Link
        to="https://www.facebook.com/"
        className="cursor-pointer hover:text-gray-500"
      >
        <GrFacebookOption></GrFacebookOption>
      </Link>
    </div>
  );
};
