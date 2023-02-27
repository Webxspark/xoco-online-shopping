import { Divider } from "antd";
import heroImg from "../assets/svg/landing-hero-1.svg";
import AppNav from "../components/nav";

const Landing = () => {
    return (
        <>
            <AppNav />
            <div className="container pb-24">
                <div className="grid grid-cols-2">
                    <div className="flex flex-col justify-center mt-20 pl-24">
                        <p className="text-gray-500 lg:text-xl md:lg:text-md sm:text-sm">Absolutely hot collections 🔥</p>
                        <div className="py-2" />
                        <h1 className="lg:text-6xl md:text-4xl sm:text-xl hero-text capitalize font-bold">The best place to<br /> find and buy <br />amazing <span>products</span></h1>
                        <p className="text-gray-500 pt-6 lg:text-xl md:lg:text-md sm:text-sm">Get the best deals from hundreds of online stores. Shop smartly and save big with XOCO.</p>
                        <div className="py-5" />
                        <div className="grid grid-cols-2 gap-4">
                            <button onClick={() => { window.scrollTo(0, 1000) }} className="bg-black text-white h-18 p-5 rounded-lg hover:backdrop-opacity-30 font-semibold text-xl">Explore Now</button>
                            <button className="bg-transparent border-2 border-black h-18 p-5 rounded-lg font-semibold text-xl hover:bg-gray-200 hover:text-black">Request a demo</button>
                        </div>
                        <div className="py-4" />
                        <div className="grid grid-cols-2 gap-4">
                            <div className="w-80">
                                <div className="grid grid-cols-3">
                                    <div className="flex flex-col">
                                        <p className="text-3xl font-bold">20k+</p>
                                        <div className="pt-1" />
                                        <p className="text-gray-800">Products</p>
                                    </div>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="border-r-2 border-gray-500 h-8"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-3xl font-bold">16k+</p>
                                        <div className="pt-1" />
                                        <p className="text-gray-800">Users</p>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="flex">
                        <img src={heroImg} alt="hero" className="w-full" />
                    </div>
                </div>
                <Divider />
                <div className="grid grid-cols-1">
                    <div className="w-full flex flex-col justify-center items-center">
                        <h1 className="lg:text-5xl md:text-4xl sm:text-xl hero-text capitalize font-bold"><span>Exclusive</span> Products</h1>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex space-x-0 pt-2">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M21 21l-6-6M18 10a8 8 0 11-16 0 8 8 0 0116 0z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <input type="search" name="q" className="py-2 text-sm text-black bg-gray-100 rounded-lg h-12 pl-10 focus:outline-none focus:bg-gray-200 focus:text-gray-1000" placeholder="Search..." autoComplete="off" />
                                </div>
                            </div>
                            <button className="bg-black border-2 border-black h-auto rounded-lg font-semibold text-white text-md">Explore Now</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Landing;