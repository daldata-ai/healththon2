import React, { useState, useEffect } from 'react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// Link component placeholder - replace with your router's Link component
const Link = ({ href, children, className, prefetch, ...props }) => (
    <a href={href} className={className} {...props}>
        {children}
    </a>
);

export default function Component() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                if (currentScrollY < lastScrollY || currentScrollY < 10) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }

                setLastScrollY(currentScrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-50 
                    flex h-20 w-full shrink-0 items-center px-4 md:px-6 
                    bg-dark-green backdrop-blur-sm
                    transition-transform duration-300 ease-in-out
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                    shadow-sm
                `}
            >
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="lg:hidden"
                            style={{ borderColor: "#afd57f", backgroundColor: "#afd57f" }}
                        >
                            <MenuIcon className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="border-none"
                        style={{ backgroundColor: "#125662" }}
                    >
                        <a href="#" className="pt-6">
                            <img src="/logo.svg" alt="Logo" className="h-14 px-8" />
                        </a>
                        <div className="grid gap-2 px-8">
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white"
                                prefetch={false}
                            >
                                Home
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white"
                                prefetch={false}
                            >
                                About
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white"
                                prefetch={false}
                            >
                                Services
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white"
                                prefetch={false}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="#"
                                className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>

                <Link href="#" className="hidden lg:flex" prefetch={false}>
                    <img src="/logo.svg" alt="Logo" className="h-14" />
                </Link>

                <NavigationMenu className="hidden lg:flex bg-transparent">
                    <NavigationMenuList>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                About
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Services
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Portfolio
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="mr-auto flex gap-2">
                    <Button className="bg-light-green hover:bg-light-green/90 text-black">
                        Sign Up
                    </Button>
                </div>
            </header>
        </>
    );
}

function MenuIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}