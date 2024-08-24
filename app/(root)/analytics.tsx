import React from "react";

interface AnalyticsPropType {
    id: string;
    title: string;
    dark?: boolean;
    sticky?: boolean;
}

const Analytics = ({ dark = false, sticky = true, ...props }: React.PropsWithChildren<AnalyticsPropType>) => {
    const singleWhiteSpace = " ";
    return (
        <section
            className={
                (dark ? "bg-landing-page-base text-white/[0.87]" : "bg-baby-pink text-gray-900/[0.95]") +
                singleWhiteSpace +
                (sticky ? "sticky top-0" : "") +
                singleWhiteSpace +
                "w-full min-h-screen font-medium px-24 py-32"
            }
            id={props.id}
        >
            <h2 className="text-4xl pb-16">{props.title}</h2>
            <p className="text-3xl font-normal pr-60 leading-snug">{props.children}</p>
        </section>
    );
};

export default Analytics;
