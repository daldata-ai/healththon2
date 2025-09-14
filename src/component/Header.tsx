import { useState, useEffect } from 'react';
import { getHumanReadableId } from '../lib/unique_id';
import { Menu, Share2 } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "../components/ui/sheet";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";

type LinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    prefetch?: boolean;
    [key: string]: any;
};

const Link = ({ href, children, className, prefetch, ...props }: LinkProps) => (
    <a href={href} className={className} {...props}>
        {children}
    </a>
);

export default function Component() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [teamId, setTeamId] = useState<string | null>(null);
    const unique_id = getHumanReadableId();
    const form_link = `https://healthdatathon.fillout.com/t/f1mxoSvUiBus?unique_id=${unique_id}&new=true`;
    useEffect(() => {
        const storedTeamId = localStorage.getItem('teamId');
        setTeamId(storedTeamId);
    }, []);

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

    const invitationLinkHref = teamId ? `/share/${teamId}` : '#';

    return (
        <>
            <header
                className={`
                    fixed top-0 left-0 right-0 z-50 
                    flex h-20 w-full shrink-0 items-center px-4 md:px-6 
                    bg-white/10 backdrop-blur-md border-b border-white/20
                    transition-transform duration-300 ease-in-out
                    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
                    shadow-lg
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
                            <Menu className="h-6 w-6" color='black' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="border-none"
                        style={{ backgroundColor: "#125662" }}
                    >
                        <a href="#" className="pt-6">
                            <img src="logo-white.svg" alt="شعار الداتاثون الصحي" className="h-14 px-8" />
                        </a>
                        <div className="grid gap-2 px-8">
                            <Link href="#aboutus" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                عن الداتاثون
                            </Link>
                            <Link href="#goals" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                الأهداف
                            </Link>
                            <Link href="#path" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                المسارات والتحديات
                            </Link>
                            <Link href="#timeline" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                الجدول الزمني
                            </Link>
                            <Link href="#prices" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                الجوائز
                            </Link>
                            <Link href="#faq" className="flex w-full items-center py-2 text-base sm:text-lg font-semibold text-white" prefetch={false}>
                                الأسئلة الشائعة
                            </Link>
                        
                        </div>
                    </SheetContent>
                </Sheet>

                <Link href="#" className="hidden lg:flex" prefetch={false}>
                    <img src="logo-white.svg" alt="شعار الداتاثون الصحي" className="h-14" />
                </Link>
                <nav aria-label="Main navigation">
                    <NavigationMenu className="hidden lg:flex bg-transparent mx-auto">
                        <NavigationMenuList>
                            {[
                                { href: "#faq", label: "الأسئلة الشائعة" },
                                { href: "#timeline", label: "الجدول الزمني" },
                                { href: "#path", label: "المسارات والتحديات" },
                                { href: "#prices", label: "الجوائز" },
                                { href: "#goals", label: "الأهداف" },
                                { href: "#aboutus", label: "عن الداتاثون" },
                            ].map((item) => (
                                <NavigationMenuLink asChild key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-xs sm:text-sm md:text-base font-medium text-white transition-colors hover:bg-light-green focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        {item.label}
                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </nav>

                <div className="mr-auto flex gap-2 justify-center items-center">
                    {teamId && (
                        <Link
                            href={invitationLinkHref}
                            className="flex text-white items-center px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 border border-white/20 backdrop-blur-sm"
                            prefetch={false}
                        >
                            <Share2 className="w-4 h-4 ml-2" />
                            رابط الدعوة
                        </Link>
                    )}
                    <a href={form_link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-light-green hover:bg-light-green/90 text-black" style={{ backgroundColor: '#afd57f' }} >
                            سجل الان
                        </Button>
                    </a>
                </div>
            </header>
        </>
    );
}
