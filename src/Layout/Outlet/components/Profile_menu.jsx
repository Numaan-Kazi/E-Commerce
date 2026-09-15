import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";

export function DropdownMenuAvatar({ LogoutHandle ,IsProfile}) {
  const User = JSON.parse(localStorage.getItem("UserData"));
  const getInitial = (name) => {
    return name?.trim().charAt(0).toUpperCase() || "N/A";
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
        {/* <Button variant="ghost" size="icon" className="rounded-full"> */}
          <Avatar >
            <AvatarFallback>{getInitial(User?.username)}</AvatarFallback>
          </Avatar>
        {/* </Button> */}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={IsProfile}>
            <BadgeCheckIcon />
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCardIcon />
            Billing
          </DropdownMenuItem>

          <DropdownMenuItem>
            <BellIcon />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* <DropdownMenuItem> */}
        <DropdownMenuItem onClick={LogoutHandle}>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
