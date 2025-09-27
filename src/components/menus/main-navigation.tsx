import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "../ui/navigation-menu";
import BusinessMenuList from "./header-menus/business-menu-list";
import CommunityMenuList from "./header-menus/community-menu-list";
import CrimeMenuList from "./header-menus/crime-menu-list";
import EventsMenuList from "./header-menus/events-menu-list";
import JobsMenuList from "./header-menus/jobs-news-list";
import NewsMenuList from "./header-menus/news-menu-list";
import { NavigationMenuList } from "@radix-ui/react-navigation-menu";

export default function MainNavigation() {
  return <NavigationMenu className="hidden lg:block">
    <NavigationMenuList className="flex flex-row">
      <NewsMenuList />
      <BusinessMenuList />
      <JobsMenuList />
      <CrimeMenuList />
      <EventsMenuList />
      <CommunityMenuList />
      <NavigationMenuItem>
        <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>;
}
