import { LOGO } from "./Logo";
import { NAVIGATION } from "./Navigation";
import { GrMenu } from "react-icons/gr";

export const HEADER = (props: { onClickNav: (value: boolean) => void }) => {
  return (
    <div className="fixed top-0 z-10 w-full font-semibold bg-white border-b-2 border-gray-200">
      <div className="relative flex items-center justify-between max-w-screen-xl p-8 mx-auto">
        <div className="flex items-center overflow-hidden">
          <LOGO></LOGO>
          <NAVIGATION></NAVIGATION>
        </div>
        <div
          className="absolute block pl-4 bg-white right-8 lg:hidden"
          onClick={() => props.onClickNav(true)}
        >
          <GrMenu className="cursor-pointer text-primary"></GrMenu>
        </div>
      </div>
    </div>
  );
};
