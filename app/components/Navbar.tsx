'use client';

import { useState } from 'react';
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { MENU_ITEMS } from '../constants';
import SavantLogo from '../../public/savant.png';

interface NavbarProps {
  pageSelected: string;
}

export default function Navbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NextUINavbar
      maxWidth="full"
      classNames={{ wrapper: 'gap-4 px-4 sm:px-6 lg:px-8' }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
    {/* Left Section */}
    <NavbarContent className="flex-shrink-0 items-center">
    {/* Mobile Menu Toggle */}
    <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
    />

    {/* Brand text on large screens only */}
    <NavbarBrand className="hidden lg:flex gap-2">
    <Link href="/">
        <p className="text-serif font-bold text-sm sm:text-lg text-red-600 whitespace-normal break-words max-w-[300px]">
        Software Architecture Analytics & Visualisation Team
        </p>
    </Link>
    </NavbarBrand>

    {/* Optional: small logo on smaller screens */}
    <NavbarBrand className="flex lg:hidden">
        <Link href="/">
            <Image
                alt={`Savant logo`}
                src={SavantLogo.src}
                width={64}
                height={64}
            />
        </Link>
    </NavbarBrand>
    </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent
        justify="end"
        className="hidden md:flex gap-6 items-center flex-shrink-0"
      >
        {MENU_ITEMS.map((item, index) => (
          <NavbarItem key={`mp${item.name}-${index}`}>
            <Link
              className="hover:text-red-600 whitespace-nowrap transition-colors"
              color="foreground"
              href={item.route}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Drawer Menu */}
      <NavbarMenu>
        {MENU_ITEMS.map((item, index) => (
          <NavbarMenuItem key={`p${item.name}-${index}`}>
            <Link
              color="foreground"
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