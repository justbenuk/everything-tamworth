import React from "react";
import MainNavigation from "../menus/main-navigation";
import Topbar from "./top-bar";
import Middlebar from "./middle-bar";

export default function Header() {
  return (
    <header className="bg-white">
      <Topbar />
      <Middlebar />
      <MainNavigation />
    </header>
  );
}
