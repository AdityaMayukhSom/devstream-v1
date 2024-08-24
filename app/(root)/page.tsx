import Navbar from "./navbar";
import Hero from "./hero";
import Analytics from "./analytics";
import Footer from "./footer";
// import Cards from "./cards";
// import Newsletter from "./newsletter";

const Home = () => {
    return (
        <main className="min-h-svh relative w-full grid grid-cols-[auto_1fr] text-xl *:selection:bg-emerald-200 *:selection:text-emerald-900 text-white/[0.87] scroll-smooth">
            <Navbar />
            <section>
                <Hero />
                <Analytics title="1&emsp;What We Do" id="what-we-do">
                    We are dedicated to empowering businesses by providing a wide range of services. We focus on
                    software development, offering our expertise in creating robust applications. We also provide
                    consulting services, helping teams optimize their workflows and adopt the best practices in the
                    industry. Our goal is to foster a thriving community where developers can learn, grow, and
                    collaborate effectively.
                </Analytics>
                <Analytics title="2&emsp;Who We Are" id="who-we-are" dark>
                    We are dedicated to empowering businesses by providing a wide range of services. We focus on
                    software development, offering our expertise in creating robust applications. We also provide
                    consulting services, helping teams optimize their workflows and adopt the best practices in the
                    industry. Our goal is to foster a thriving community where developers can learn, grow, and
                    collaborate effectively.
                </Analytics>
                <section className="sticky">
                    <Analytics title="3&emsp;How To Join" id="how-to-join" sticky={false}>
                        We are dedicated to empowering businesses by providing a wide range of services. We focus on
                        software development, offering our expertise in creating robust applications. We also provide
                        consulting services, helping teams optimize their workflows and adopt the best practices in the
                        industry. Our goal is to foster a thriving community where developers can learn, grow, and
                        collaborate effectively.
                    </Analytics>
                    <Footer />
                </section>
                {/* <Newsletter /> */}
                {/* <Cards /> */}
            </section>
        </main>
    );
};

export default Home;
