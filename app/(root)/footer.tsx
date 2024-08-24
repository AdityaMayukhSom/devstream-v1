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
            { name: "About", link: "#what-we-do" },
            { name: "Blogs", link: "/blogs" },
            { name: "Creator", link: "/creator" },
            { name: "Careers", link: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <footer className="pt-24 grid lg:grid-cols-4 pb-60 pl-24 gap-8 text-gray-300 border-t bg-landing-page-base border-gray-400/15">
            {footerData.map((data) => (
                <div key={`footer-item-name-${data.name}`}>
                    <h5 className="font-medium text-gray-400">{data.name}</h5>
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
