"use client";

import { useState } from "react";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/react";
import SavantLogo from "../../public/savant_brain.jpeg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {name: "Projects", route: "/projects"},
    {name: "Education", route: "/education"},
    {name: "Positions", route: "/openings"},
    {name: "Contact us", route: "/contacts"},
  ];

  return (
    <NextUINavbar
      maxWidth="xl"
      classNames={{ wrapper: "gap-6" }}
      // add this line
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="data-[justify=start]:flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="gap-2">
        <Link href="/">
        <Image src={SavantLogo} alt="Savant logo" width={45} height={45}/>
          <p className="text-serif text-red-600">SAVANT</p>
          </Link>

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex gap-4 data-[justify=end]:flex-grow-0">
      <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="/education">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="/openings">
            Positions
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="/contacts">
            Contact us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={"foreground"}
              className="w-full hover:text-red-600"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
}