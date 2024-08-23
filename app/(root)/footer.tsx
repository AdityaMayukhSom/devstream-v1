import Link from "next/link";
import React from "react";

const footerData = [
    {
        name: "Solutions",
        items: [
            { name: "Analytics", link: "#" },
            { name: "Marketing", link: "#" },
            { name: "Commerce", link: "#" },
            { name: "Insights", link: "#" },
        ],
    },
    {
        name: "Support",
        items: [
            { name: "Pricing", link: "#" },
            { name: "Documentation", link: "#" },
            { name: "Guides", link: "#" },
            { name: "API Status", link: "#" },
        ],
    },
    {
        name: "Company",
        items: [
            { name: "About", link: "#" },
            { name: "Blog", link: "#" },
            { name: "Jobs", link: "#" },
            { name: "Press", link: "#" },
            { name: "Careers", link: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="py-16 grid lg:grid-cols-4 pb-48 pl-24 gap-8 text-gray-300 border-t border-gray-400/15">
            {footerData.map((data) => (
                <div key={`footer-item-name-${data.name}`}>
                    <h6 className="font-medium text-gray-400">{data.name}</h6>
                    <ul className="text-lg flex flex-col gap-y-1 pt-4">
                        {data.items.map((item) => (
                            <li key={`footer-item-list-item-${data.name}-${item.name}`}>
                                <Link href={item.link}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </footer>
    );
};

export default Footer;
