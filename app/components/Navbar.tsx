'use client';

import { useState } from 'react';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import {
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Navbar as NextUINavbar
} from '@nextui-org/navbar';
import { Link } from '@nextui-org/react';
import SavantLogo from '../../public/savant_brain.jpeg';

interface NavbarProps {
    menuItems: { name: string; route: string }[];
    pageSelected: string;
}

export default function Navbar(props: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Industrial Projects', route: './industrial-projects' },
        { name: 'Academic Projects', route: './projects' },
        { name: 'Positions', route: './openings' },
        { name: 'Contact us', route: './contacts' }
    ];

    return (
        <NextUINavbar
            maxWidth="xl"
            classNames={{ wrapper: 'gap-6' }}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="data-[justify=start]:flex-grow-0">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    className="sm:hidden"
                />
                <NavbarBrand className="gap-2">
                    <Link href="/savant">
                        {/* <Image src={SavantLogo} alt="Savant logo" width={45} height={45}/> */}
                        <p className="text-serif font-bold text-sm sm:text-lg text-red-600">
                            Software Analytics & Visualisation Team
                        </p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                justify="end"
                className="hidden sm:flex gap-4 data-[justify=end]:flex-grow-0"
            >
                {props.menuItems !== undefined &&
                    props.menuItems.length == 0 &&
                    menuItems.map((item, index) => (
                        <NavbarItem key={`mnp${item}-${index}`}>
                            <Link
                                className="hover:text-red-600"
                                color="foreground"
                                href={item.route}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}

                {props.menuItems !== undefined &&
                    props.menuItems.length > 0 &&
                    props.menuItems.map((item, index) => (
                        <NavbarItem key={`mp${item}-${index}`}>
                            <Link
                                className="hover:text-red-600"
                                color="foreground"
                                href={item.route}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
            </NavbarContent>

            <NavbarMenu>
                {props.menuItems == undefined &&
                    menuItems.map((item, index) => (
                        <NavbarMenuItem key={`np${item}-${index}`}>
                            <Link
                                color={'foreground'}
                                className="w-full hover:text-red-600"
                                href={item.route}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}

                {props.menuItems !== undefined &&
                    props.menuItems.length > 0 &&
                    props.menuItems.map((item, index) => (
                        <NavbarMenuItem key={`p${item}-${index}`}>
                            <Link
                                color={'foreground'}
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
