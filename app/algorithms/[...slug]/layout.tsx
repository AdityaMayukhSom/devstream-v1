import { Roboto } from "next/font/google";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export default function AlgorithmsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <main className={roboto.className}>{children}</main>;
}
