import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Menus } from "ultils/guards/Menus";

export const SIDEBAR = (props: {
  isOpen?: boolean;
  onClickNav: (value: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(!!props.isOpen);

  useEffect(() => {
    setIsOpen(props.isOpen);
    return () => {
      setIsOpen(false);
    };
  }, [props.isOpen]);

  return (
    <div
      className={`fixed top-0 z-20 min-h-screen py-10 bg-white border-l border-gray-200 px-14 duration-500 ${
        isOpen ? "right-0" : " -right-full"
      }`}
    >
      <div
        className="absolute p-4 cursor-pointer top-2 right-2 hover:text-gray-500"
        onClick={() => props.onClickNav(false)}
      >
        <AiOutlineClose></AiOutlineClose>
      </div>
      <ul className="flex-col space-y-4 text-gray-300 uppercase font-secondary">
        {Menus.topNav.map((el, i) => (
          <li key={i}>
            <Link
              to={el.path}
              className="duration-150 cursor-pointer hover:text-black"
            >
              {el.menu_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
