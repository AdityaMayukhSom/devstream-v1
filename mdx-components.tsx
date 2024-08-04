import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    const singleWhiteSpace = " ";
    return {
        ul: ({ children }) => <ul className="pb-4">{children}</ul>,
        li: ({ children }) => (
            <li className="article-list-item grid grid-cols-[auto_1fr] before:content-['—'] before:text-yellow-400 before:pr-4">
                {children}
            </li>
        ),
        p: ({ children, ...rest }) => (
            <p className="pb-4 font-normal text-left prose-base" {...rest}>
                {children}
            </p>
        ),
        h1: ({ children }) => <h1 className="text-4xl font-semibold py-4 mb-4">{children}</h1>,
        h2: ({ children }) => <h2 className="text-[28px] leading-4 font-semibold py-3 mb-2">{children}</h2>,
        h3: ({ children }) => <h3 className="text-[20px] leading-4 font-semibold py-2">{children}</h3>,
        pre: ({ children, ...rest }) => (
            <pre
                className="p-3 my-5 text-base leading-none *:selection:bg-emerald-200 *:selection:text-emerald-900"
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
                    "font-monospace-only text-base leading-none *:font-monospace-only *:leading-none *:text-base line-number:content-[attr(data-line-number)] line-number:inline-block line-number:w-3 line-number:mr-4 line-number:text-right line-number:text-gray-600 line-number:leading-none line-number:text-base"
                }
                {...rest}
            >
                {children}
            </code>
        ),
        a: ({ children, href, ...rest }) => (
            <a href={href} {...rest}>
                {children}
            </a>
        ),
        ...components,
    };
}
