import { Link } from "react-router-dom";
import { Menus } from "ultils/guards/Menus";

export const NAVIGATION = () => {
  return (
    <div className="hidden pl-8 overflow-x-auto scrollbar-hide lg:block">
      <ul className="flex space-x-8 text-gray-300 uppercase font-secondary">
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
