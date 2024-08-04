import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    const singleWhiteSpace = " ";
    return {
        ul: ({ children }) => <ul className="pb-4">{children}</ul>,
        li: ({ children }) => (
            <li className="grid grid-cols-[auto_1fr] before:content-['—'] before:leading-snug before:text-yellow-400 before:pr-4">
                <div>{children}</div>
            </li>
        ),
        p: ({ children, ...rest }) => (
            <p className="pb-3 font-normal" {...rest}>
                {children}
            </p>
        ),
        h1: ({ children }) => (
            <h1 className="text-4xl font-semibold py-4 mb-4 selection:bg-sky-200 selection:text-sky-900">{children}</h1>
        ),
        h2: ({ children }) => <h2 className="text-[27px] font-semibold pb-4 pt-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold pb-3 pt-1">{children}</h3>,
        pre: ({ children, ...rest }) => (
            <pre
                className="p-3 mb-5 rounded-sm leading-none *:selection:bg-emerald-200 *:selection:text-emerald-900 overflow-hidden"
                {...rest}
            >
                {children}
            </pre>
        ),
        code: ({ children, className, ...rest }) => (
            <code
                className={
                    (className ?? "") +
                    singleWhiteSpace +
                    "font-monospace-only *:leading-none [&:not(.hljs)]:text-yellow-300 line-number:content-[attr(data-line-number)] line-number:inline-block line-number:w-5 line-number:mr-4 line-number:text-right line-number:text-gray-600 line-number:leading-none"
                }
                {...rest}
            >
                {children}
            </code>
        ),
        a: ({ children, href, ...rest }) => (
            <Link
                href={href ?? ""}
                className="border-spacing-1 border-b-2 transition-all ease-in-out duration-150 border-gray-500 hover:border-gray-100"
                {...rest}
            >
                {children}
            </Link>
        ),
        ...components,
    };
}
