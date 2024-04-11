import React from "react";
import Image from "next/image";
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import SavantLogo from "../../public/savant_brain.jpeg";

export default function CustomNavBar() {
  const menuItems = [
    { name: "Home", link: "./" },
    { name: "Projects", link: "./projects" },
    { name: "Education", link: "./education" },
    { name: "Openings", link: "./openings" },
    { name: "Contacts", link: "./contacts" },
  ];

  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src={SavantLogo} alt="SAVANT logo" width={42} height={42} />
          <p className="font-serif text-red-600">SAVANT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src={SavantLogo} alt="SAVANT logo" width={42} height={42} />
          <p className="font-serif text-inherit text-red-600">SAVANT</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="./">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="./projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="./education">
            Education
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="./openings">
            Openings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="hover:text-red-600" color="foreground" href="./contacts">
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full hover:text-red-600"
              color="foreground"
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
