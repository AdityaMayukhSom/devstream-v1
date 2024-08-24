import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./mdx-components.tsx",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            backgroundColor: {
                "dark-base": "rgb(21,21,21)",
                "landing-page-base": "#121212",
                "contrasting-base": "#141618",
                "tealish-blue": "#003DF6",
                "algae-green": "#CEFF6C",
                "baby-pink": "#E699A6",
                "mint-green": "#00df9a",
                "olive-green": "#556B2F",
                "sunshine-yelow": "#FB8B24",
            },
            fontFamily: {
                "monospace-only": "monospace",
            },
            lineHeight: {
                "4.5": "1.125rem",
            },
            textColor: {
                "woodish-brown": "#040F0F",
                "creamy-peach": "#FFDAB9",
                "sunshine-yelow": "#FB8B24",
                "baby-pink": "#E699A6",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        plugin(({ addComponents, addVariant }) => {
            addVariant("line-number", "&>[data-line-number]::before");

            addComponents({
                ".btn": {
                    padding: ".5rem 1rem",
                    borderRadius: ".25rem",
                    fontWeight: "600",
                },
                ".drag-none": {
                    "-webkit-user-drag": "none",
                    "-khtml-user-drag": "none",
                    "-moz-user-drag": "none",
                    "-o-user-drag": "none",
                    "user-drag": "none",
                },

                // ".polca-dotted":{
                //     "--dot-empty": calc(var(--dot-space) - var(--dot-size));
                //     "--gradient-start": linear-gradient(90deg, var(--background-color) var(--dot-empty), transparent 1%) center;
                //     "--gradient-end": linear-gradient(var(--background-color) var(--dot-empty), transparent 1%) center;
                //     "background": var(--gradient-start), var(--gradient-end), var(--dot-color);
                //     "background-size": var(--dot-space) var(--dot-space);
                // }
            });
        }),
    ],
};
export default config;
