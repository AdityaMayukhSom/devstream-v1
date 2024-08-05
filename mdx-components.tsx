import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    const singleWhiteSpace = " ";
    const svgColor = "#d1d5db";

    return {
        ul: ({ children }) => <ul className="pb-4">{children}</ul>,
        li: ({ children }) => (
            <li className="grid grid-cols-[auto_1fr] before:content-['—'] before:leading-snug w-full before:text-yellow-400 before:pr-4">
                <div className="w-full">{children}</div>
            </li>
        ),
        p: ({ children, ...rest }) => (
            <p className="pb-3 font-normal" {...rest}>
                {children}
            </p>
        ),
        h1: ({ children, ...rest }) => (
            <h1 className="text-4xl font-semibold py-4 mb-4 selection:bg-sky-200 selection:text-sky-900" {...rest}>
                {children}
            </h1>
        ),
        h2: ({ children, ...rest }) => (
            <h2 className="text-[32px] font-semibold pb-5 pt-3" {...rest}>
                {children}
            </h2>
        ),
        h3: ({ children, ...rest }) => (
            <h3 className="text-xl font-semibold pb-3 pt-1" {...rest}>
                {children}
            </h3>
        ),
        h4: ({ children, ...rest }) => (
            <h4 className="text-base font-medium pb-3 pt-1" {...rest}>
                {children}
            </h4>
        ),
        pre: ({ children, ...rest }) => (
            <pre
                className="p-3 mb-5 rounded-sm leading-none *:selection:bg-emerald-200 *:selection:text-emerald-900 overflow-hidden"
                {...rest}
            >
                {children}
            </pre>
        ),
        table: ({ children, ...rest }) => (
            <table
                className="min-w-full text-left text-sm font-light text-surface mb-4 *:selection:bg-emerald-200 *:selection:text-emerald-900"
                {...rest}
            >
                {children}
            </table>
        ),
        thead: ({ children, ...rest }) => (
            <thead className="border-b border-white/10" {...rest}>
                {children}
            </thead>
        ),
        tr: ({ children, ...rest }) => (
            <tr className="border-b border-white/10" {...rest}>
                {children}
            </tr>
        ),
        th: ({ children, ...rest }) => (
            <th className="px-6 py-4" scope="col" {...rest}>
                {children}
            </th>
        ),
        td: ({ children, ...rest }) => (
            <td className="whitespace-nowrap px-6 py-4" {...rest}>
                {children}
            </td>
        ),
        code: ({ children, className, ...rest }) => (
            <code
                className={
                    (className ?? "") +
                    singleWhiteSpace +
                    "font-monospace-only *:leading-none [&:not(.hljs)]:text-yellow-400 line-number:content-[attr(data-line-number)] line-number:inline-block line-number:w-5 line-number:mr-4 line-number:text-right line-number:text-gray-500 line-number:leading-none"
                }
                {...rest}
            >
                {children}
            </code>
        ),
        a: ({ children, href, ...rest }) => (
            <Link
                href={href ?? "#"}
                target="_blank"
                className="border-spacing-1 border-b-2 transition-all ease-in-out duration-150 border-gray-500 hover:border-gray-100"
                {...rest}
            >
                {children}
            </Link>
        ),
        blockquote: ({ children, ...rest }) => (
            <blockquote
                className="px-4 pt-4 my-4 bg-contrasting-base border-l-8 border-gray-700/50 italic text-base text-gray-300"
                {...rest}
            >
                <svg className="w-6 h-6 mb-2" fill={svgColor} viewBox="796 698 200 200" stroke={svgColor}>
                    <path d="M906.791,846.26v40.949C955.98,887.209,996,847.189,996,798v-89.208h-89.209V798h48.261 C955.052,824.609,933.402,846.26,906.791,846.26z"></path>
                    <path d="M796,846.26v40.949c49.189,0,89.208-40.02,89.208-89.209v-89.208H796V798h48.26C844.26,824.609,822.612,846.26,796,846.26z "></path>
                </svg>
                {children}
            </blockquote>
        ),
        Experience: (props) => <Experience {...props} />,
        ...components,
    };
}
