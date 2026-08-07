"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ChevronRight, Download, Github } from "lucide-react";

import { ThemeTogglerButton } from "../animate-ui/components/buttons/theme-toggler";
import { buttonVariants } from "../ui/button";

import { Button } from "@/components/animate-ui/components/buttons/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type DropdownItem = {
  title: string;
  href: string;
  description: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdownItems?: DropdownItem[];
};

const ITEMS = [
  { label: "Projects", href: "/projects" },
  {
    label: "About",
    href: "/about",
    // dropdownItems: [
    //   {
    //     title: "Introduction",
    //     href: "/about",
    //     description: "A brief overview of who I am and what I do.",
    //   },
    //   {
    //     title: "Experience",
    //     href: "/about#experience",
    //     description: "A look at my professional journey and work experience.",
    //   },
    //   // {
    //   //   title: "Credentials",
    //   //   href: "/credentials",
    //   //   description: "My academic background and educational journey.",
    //   // },
    //   {
    //     title: "Skills",
    //     href: "/about#skills",
    //     description:
    //       "The technologies and tools I use to build great products.",
    //   },
    // ],
  },
  { label: "Credentials", href: "/credentials" },
  // { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as NavItem[];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex items-center gap-4 rounded-md p-2 leading-none no-underline outline-hidden transition-colors select-none"
        >
          <div className="space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
            <div className="text-xs leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-xs leading-snug">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "bg-background/70 fixed left-1/2 z-50 mt-2.5 w-[min(90%,700px)] -translate-x-1/2 rounded-4xl border backdrop-blur-md transition-all duration-300",
        "top-5 lg:top-12",
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          aria-label="Go to the home page"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/logo.svg"
            alt="Muhammad Hasnain Saeed logo"
            width={95}
            height={20}
            className="dark:invert"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="max-lg:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              {ITEMS.map((link) =>
                link.dropdownItems ? (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuTrigger className="data-[state=open]:bg-accent/50 bg-transparent! px-1.5">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-72 space-y-2 p-3">
                        {link.dropdownItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.label}>
                    <Link
                      href={link.href}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={cn(
                        "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                        pathname === link.href && "text-muted-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeTogglerButton variant={"outline"} />
          <a
            href="https://uzfnhqxt01hltmw6.public.blob.vercel-storage.com/Hasnain-saeed.pdf?download=1"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "outline",
              className: "max-lg:hidden",
            })}
          >
            <span className="relative z-10">Resume</span>
            <Download />
          </a>
          <a
            href="https://github.com/muhammadhasnainsaeed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="size-4" />
            <span className="sr-only">GitHub</span>
          </a>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            type="button"
            aria-controls="mobile-primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close main menu" : "Open main menu"}
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            <div className="absolute top-1/2 left-1/2 block w-4.5 -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        id="mobile-primary-navigation"
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav
          aria-label="Mobile primary"
          className="divide-border flex flex-1 flex-col divide-y"
        >
          {ITEMS.map((link) =>
            link.dropdownItems ? (
              <div key={link.label} className="py-4 first:pt-0 last:pb-0">
                <Button
                  type="button"
                  aria-expanded={openDropdown === link.label}
                  aria-controls={`mobile-dropdown-${link.label.toLowerCase()}`}
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === link.label ? null : link.label,
                    )
                  }
                  variant="ghost"
                  className="flex! h-auto! w-full! items-center justify-between! px-0! py-0! text-base! font-medium!"
                >
                  {link.label}
                  <ChevronRight
                    className={cn(
                      "size-4 transition-transform duration-200",
                      openDropdown === link.label ? "rotate-90" : "",
                    )}
                  />
                </Button>
                <div
                  id={`mobile-dropdown-${link.label.toLowerCase()}`}
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openDropdown === link.label
                      ? "mt-4 max-h-250 opacity-100"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="bg-muted/50 space-y-3 rounded-lg p-4">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group hover:bg-accent block rounded-md p-2 transition-colors"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        <div className="transition-transform duration-200 group-hover:translate-x-1">
                          <div className="text-primary font-medium">
                            {item.title}
                          </div>

                          <p className="text-muted-foreground mt-1 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={buttonVariants({
                  variant: "ghost",
                  className:
                    "flex! h-auto! w-full! items-center justify-between! px-0! py-4 text-base! font-medium! first:pt-0 last:pb-0",
                })}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
};
