import React from "react";

interface ExperienceProps {
    company: string;
    start: string;
    end: string;
    position: string;
    technologies: string[];
}
const Experience = (props: ExperienceProps) => {
    return (
        <section className="pb-2">
            <div className="grid w-full grid-cols-[auto_1fr_auto] items-center">
                <span>
                    <strong>{props.position}</strong>&nbsp;&middot;&nbsp;{props.company}
                </span>
                <div className=" border-dashed border-b border-gray-400/30 h-2 mx-4"></div>
                <span className="text-xs">
                    {props.start}&nbsp;&middot;&nbsp;{props.end}
                </span>
            </div>
            <div>
                <span>Technologies&nbsp;:</span>&ensp;{props.technologies.join(" \u00b7 ")}
            </div>
        </section>
    );
};

export default Experience;
