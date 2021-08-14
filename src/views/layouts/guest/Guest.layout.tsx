import { FOOTER } from "components/common/Footer";
import { HEADER } from "components/common/Header";
import { SIDEBAR } from "components/common/SideBar";
import { useState } from "react";

export const GUEST_LAYOUT = (props: { children?: any }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClickNav = (value) => {
    console.log(isSidebarOpen);
    setIsSidebarOpen(value);
  };
  return (
    <div className="relative w-full bg-body app">
      <SIDEBAR isOpen={isSidebarOpen} onClickNav={onClickNav}></SIDEBAR>
      <HEADER onClickNav={onClickNav}></HEADER>
      <main className="max-w-screen-xl px-8 pt-32 pb-20 mx-auto">
        {props.children}
      </main>
      <FOOTER></FOOTER>
    </div>
  );
};
