import { LOGO } from "../Header";
import { FOOTER_SUBSCRIBE } from "./Form";
import { FOOTER_NAVIGATION } from "./Navigation";
import { FOOTER_SOCIAL } from "./Social";

export const FOOTER = () => {
  return (
    <div className="w-full font-semibold text-gray-200 bg-gray-900">
      <div className="relative flex flex-wrap max-w-screen-xl p-8 mx-auto">
        <div className="w-full my-4 md:my-0 md:w-2/6 lg:w-1/6">
          <LOGO className="text-gray-500"></LOGO>
          <div className="mt-4 text-sm leading-4 text-gray-400">
            <p>© 2018 Deck</p>
            <p>Component based UI Kit</p>
          </div>
        </div>

        <div className="w-full md:w-3/6">
          <FOOTER_NAVIGATION></FOOTER_NAVIGATION>
        </div>

        <div className="flex flex-col justify-start w-full mt-4 md:items-center md:justify-end md:flex-row-reverse lg:w-2/6 lg:block lg:mt-0">
          <FOOTER_SOCIAL></FOOTER_SOCIAL>
          <FOOTER_SUBSCRIBE></FOOTER_SUBSCRIBE>
        </div>
      </div>
    </div>
  );
};
