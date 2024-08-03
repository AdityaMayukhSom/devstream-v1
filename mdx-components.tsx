import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => <h1 className="text-4xl font-medium py-2">{children}</h1>,
        ul: ({ children }) => <ul>{children}</ul>,
        li: ({ children }) => <li>{children}</li>,
        ...components,
    };
}
