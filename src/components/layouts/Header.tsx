import { Link } from "@tanstack/react-router";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallBack, AvatarImage } from "~/components/ui/Avatar";
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuLinkItem,
  MenuSeparator,
  MenuTrigger,
} from "~/components/ui/Menu";

export function Header() {
  return (
    <header className="col-start-2 row-start-1 w-full bg-background-100 shadow-border h-16 flex items-center justify-between px-6">
      <nav className="font-semibold text-xl" aria-label="Secondary Navigation">
        <Link to="/">Admin</Link>
      </nav>
      <Menu>
        <MenuTrigger>
          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallBack>SA</AvatarFallBack>
          </Avatar>
        </MenuTrigger>
        <MenuContent className="min-w-2xs">
          <MenuGroup>
            <MenuLinkItem render={<Link to="/" />}>
              <BadgeCheckIcon />
              Account
            </MenuLinkItem>
            <MenuLinkItem
              render={
                <Link to="/products">
                  <CreditCardIcon />
                  Billing
                </Link>
              }
            ></MenuLinkItem>
            <MenuLinkItem render={<Link to="/products" />}>
              <BellIcon />
              Notifications
            </MenuLinkItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuLinkItem render={<Link to="/products" />}>
            <LogOutIcon />
            Sign Out
          </MenuLinkItem>
        </MenuContent>
      </Menu>
    </header>
  );
}
