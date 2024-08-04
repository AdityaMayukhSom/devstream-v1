export default function AlgorithmsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <main className="bg-dark-base text-white text-sm pt-36 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
            {children}
            <footer className="border-t py-6 mt-16 border-gray-700">Team Devstream.</footer>
        </main>
    );
}
