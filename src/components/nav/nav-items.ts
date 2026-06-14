import {
  CalendarClock,
  LayoutDashboard,
  Plus,
  Settings,
  UtensilsCrossed,
  History,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

/** Primary screens, per the product spec. Shared by sidebar and bottom nav. */
export const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/add", label: "Add", icon: Plus },
  { href: "/history", label: "History", icon: History },
  { href: "/food", label: "Food", icon: UtensilsCrossed },
  { href: "/routines", label: "Routines", icon: CalendarClock },
  { href: "/settings", label: "Settings", icon: Settings },
];
