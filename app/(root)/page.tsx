import React from "react";
import Analytics from "./analytics";
import Cards from "./cards";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Newsletter from "./newsletter";

const Home = () => {
    return (
        <main className="min-h-svh relative w-full grid grid-cols-[auto_1fr] bg-nearly-black text-xl *:selection:bg-emerald-200 *:selection:text-emerald-900">
            <Navbar />
            <section>
                <Hero />
                <Analytics />
                {/* <Newsletter /> */}
                {/* <Cards /> */}
                <Footer />
            </section>
        </main>
    );
};

export default Home;
