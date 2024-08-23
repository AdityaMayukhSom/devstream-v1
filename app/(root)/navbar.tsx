import React from "react";

const Navbar = () => {
    return (
        <nav className="flex flex-col justify-start sticky h-screen top-0 py-10 px-16 text-xl border-r border-gray-400/15">
            <ul className="flex flex-col gap-y-1">
                <li className="">Company</li>
                <li className="">Resources</li>
                <li className="">Careers</li>
            </ul>
        </nav>
    );
};

export default Navbar;
