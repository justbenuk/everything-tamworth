import React from "react";
import PageContainer from "../page-container";
import { MenuIcon } from "lucide-react";
import MenuList from "./menu-list";

export default function MainNavigation() {
  return (
    <div className="bg-teal-500 py-4 text-white">
      <PageContainer>
        <div>
          <div className="lg:hidden">
            <MenuIcon />
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center">
            <MenuList />
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
