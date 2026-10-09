import { Link } from "@tanstack/react-router";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react";
import { Avatar, AvatarFallBack, AvatarImage } from "~/components/ui/Avatar";
import { Input } from "~/components/ui/Input";
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
    <header className="col-start-2 row-start-1 w-full bg-background-100 shadow-border h-16 grid grid-cols-3 items-center px-6">
      <Input
        id="search"
        name="search"
        placeholder="Search for anything..."
        className="col-start-2 justify-self-center w-full max-w-md"
      />

      <Menu>
        <MenuTrigger className="col-start-3 justify-self-end">
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
            />
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
