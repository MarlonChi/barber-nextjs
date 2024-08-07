import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { SidebarButton } from "./sidebar-button";

export const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.svg" height={18} width={120} />

        <SidebarButton />
      </CardContent>
    </Card>
  );
};
