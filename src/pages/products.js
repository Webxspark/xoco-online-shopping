import { useLoadingContext } from "react-router-loading";
import AppNav from "../components/nav";
import ProductsGrid from "../components/products-grid";
const Products = () => {
    let RouterLoadingStatus = useLoadingContext();
    RouterLoadingStatus.done();
    return (
        <div>
            <AppNav />
            <div className="m-1 md:m-8 flex flex-col justify-center items-center">
                <h1 className="lg:text-5xl md:text-4xl text-2xl text-md py-4 hero-text capitalize font-bold"><span>Exclusive</span> Products</h1>
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4">
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
                <ProductsGrid />
            </div>
        </div>
    )
}
export default Products;