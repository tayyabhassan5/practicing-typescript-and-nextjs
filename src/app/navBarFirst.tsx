"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThumbsUp, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
//import { useNavigate } from 'react-router-dom';
import FImage from './assets/moon_logo.png'
import Image from 'next/image'

interface NavigationLink {
    text: string;
    href: string;

}

export const NavBarFirst = () => {
    const navigationLinks: NavigationLink[] = [
        { text: 'Product', href: '#' },
        { text: 'Features', href: '#' },
        { text: 'Marketplace', href: '#' },
        { text: 'Company', href: '#' },
    ];
    const [isNavOpen, handleNavButton] = useState(false);

    const handleNavToggle = () => {
        handleNavButton(!isNavOpen);
    };

    return (
        <div>
            <nav className="hidden w-full md:flex justify-evenly h-[82px] ">
                <div className="hidden md:flex md:items-center">
                    <Image className="h-[38.33px] w-[40.3px]" src={FImage} alt="Company Logo" />
                    <div>MOON</div>
                </div>
                <div className="hidden md:flex md:items-center md:gap-[60px]">
                    {navigationLinks.map((link) => (
                        <div className="ml-0">
                            <a>{link.text}</a>
                        </div>
                    ))}
                </div>
                <div className="hidden md:flex md:items-center md:gap-[24px]">
                    <FontAwesomeIcon className="hover-pointer" icon={faSearch} />
                    <FontAwesomeIcon className=" hover-pointer" icon={faThumbsUp} />
                    <FontAwesomeIcon
                        className=" cursor-pointer"
                        icon={faShoppingCart}

                    />
                    <FontAwesomeIcon
                        className=" cursor-pointer"
                        icon={faShoppingCart}

                    />
                </div>
            </nav>

            <nav className="md:hidden w-full flex items-center justify-around h-[82px]">
                <div className="">
                    <section className="MOBILE-MENU flex">
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={handleNavToggle}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                    </section>
                </div>

                <div className="font-bold">MOON</div>
                <div>Helo</div>

            </nav>


            <div className={` ${isNavOpen ? ' ' : 'hidden'}`}>
                {navigationLinks.map((link) => (
                    <div className="ml-0">
                        <a>{link.text}</a>
                    </div>
                ))}
            </div>

        </div>

    );
};
