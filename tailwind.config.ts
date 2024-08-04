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
                "contrasting-base": "#141618",
            },
            fontFamily: {
                "monospace-only": "monospace",
            },
            lineHeight: {
                "4.5": "1.125rem",
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
            });
        }),
    ],
};
export default config;
