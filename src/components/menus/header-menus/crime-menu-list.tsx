import { NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export default function CrimeMenuList() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Crimes</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          <NavigationMenuLink href="/crime">
            <div className="font-medium">All Crime</div>
            <div className="text-muted-foreground text-xs">News, Stolen and Crime reports.</div>
          </NavigationMenuLink>
          <NavigationMenuLink href="/crime/stats">
            <div className="font-medium">Crime Stats</div>
            <div className="text-muted-foreground text-xs">Check current crime in Tamworth</div>
          </NavigationMenuLink>
          <NavigationMenuLink href="/crime/stops">
            <div className="font-medium">Stop & Search Stats</div>
            <div className="text-muted-foreground text-xs">Check stop and search crime in Tamworth</div>
          </NavigationMenuLink>
          <NavigationMenuLink href="/crime/stolen-report">
            <div className="font-medium">Stolen Vehicle Report</div>
            <div className="text-muted-foreground text-xs">Report your stolen Vehicle. Let the community know so they can keep an eye out for you</div>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
