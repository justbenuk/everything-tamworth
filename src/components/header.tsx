import React from "react";
import HeaderAuthMenu from "./ui/header-auth-menu";
import MainNavigation from "./menus/main-navigation";

export default function Header() {
  return (
    <header className="flex flex-row justify-between px-6 py-4 border-b">
      <div>logo</div>
      <MainNavigation />
      <div>
        <HeaderAuthMenu />
      </div>
    </header>
  );
}
