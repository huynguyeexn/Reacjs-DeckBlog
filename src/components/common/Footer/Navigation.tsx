import { Menus } from "ultils/guards/Menus";
import { Link } from "react-router-dom";

export const FOOTER_NAVIGATION = () => {
  return (
    <div className="my-4 overflow-x-auto md:my-0 md:px-20 scrollbar-hide">
      <ul className="grid grid-cols-2 text-gray-300 uppercase md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-4 font-secondary">
        {Menus.topNav.map((el, i) => (
          <li key={i}>
            <Link
              to={el.path}
              className="duration-150 cursor-pointer hover:text-gray-500"
            >
              {el.menu_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
