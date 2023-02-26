import heroImg  from "../assets/svg/landing-hero-1.svg";
import AppNav from "../components/nav";

const Landing = () => {
    return (
        <>
            <AppNav />
            <div className="container">
                <div className="grid grid-cols-2 gap-16">
                    <div className="flex flex-col justify-center mt-24 pt-12 pl-24">
                        <p className="text-gray-500 lg:text-xl md:lg:text-md sm:text-sm">Absolutely hot collections 🔥</p>
                        <div className="py-2" />
                        <h1 className="lg:text-6xl md:text-4xl sm:text-xl hero-text capitalize font-bold">The best place to<br /> find and buy <br />amazing <span>products</span></h1>
                        <p className="text-gray-500 pt-6 lg:text-xl md:lg:text-md sm:text-sm">Get the best deals from hundreds of online stores. Shop smartly and save big with XOCO.</p>
                        <div className="py-5" />
                        <div className="grid grid-cols-2 gap-4">
                            <button className="bg-black text-white h-18 p-5 rounded-lg hover:backdrop-opacity-30 font-semibold text-xl">Explore Now</button>
                            <button className="bg-transparent border-2 border-black h-18 p-5 rounded-lg font-semibold text-xl hover:bg-gray-200 hover:text-black">Request a demo</button>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={heroImg} alt="hero" className="w-full" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing;