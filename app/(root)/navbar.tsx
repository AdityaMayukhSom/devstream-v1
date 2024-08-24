import React from "react";
import Image from "next/image";
import ArrowHead from "@/components/svgs/arrowhead.svg";

const navbarData = [
    { name: "Home", link: "/" },
    { name: "Company", link: "/company" },
    { name: "Resources", link: "/resources" },
    { name: "Careers", link: "/careers" },
];

const Navbar = () => {
    return (
        <nav className="flex flex-col justify-start sticky h-screen top-0 py-10 bg-landing-page-base px-14 text-lg border-r border-gray-400/15">
            <ul className="flex flex-col gap-y-1">
                {navbarData.map((data) => (
                    <li className="flex gap-x-3 items-center" key={data.name}>
                        <Image src={ArrowHead} alt="arrowhead icon for nav menus" className="invert" height={12} />
                        <a href={data.link}>{data.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
