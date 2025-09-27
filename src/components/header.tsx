import React from "react";
import HeaderAuthMenu from "./ui/header-auth-menu";
import MainNavigation from "./menus/main-navigation";
import SiteTitle from "./site-title";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-6 py-4 border-b">
      <SiteTitle />
      <MainNavigation />
      <div>
        <HeaderAuthMenu />
      </div>
    </header>
  );
}
