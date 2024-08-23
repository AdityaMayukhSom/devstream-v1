import Navbar from "./navbar";
import Hero from "./hero";
import Analytics from "./analytics";
import Footer from "./footer";
// import Cards from "./cards";
// import Newsletter from "./newsletter";

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
