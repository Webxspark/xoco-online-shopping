import { useState } from 'react';
import { Link } from 'react-router-dom';
const AppNav = () => {
    var [ProfileDrawer, setProfileDrawer] = useState('hidden');
    var [MobileDrawerVisibility, setMobileDrawerVisibility] = useState('hidden');
    var [MobileDrawerSVGCloseVisibility, setMobileDrawerSVGCloseVisibility] = useState('hidden');
    var [MobileDrawerSVGOpenVisibility, setMobileDrawerSVGOpenVisibility] = useState('block');
    function updateNavVisibility() {
        setMobileDrawerVisibility(MobileDrawerVisibility = swapVisibility(MobileDrawerVisibility));
        setMobileDrawerSVGCloseVisibility(MobileDrawerSVGCloseVisibility = swapVisibility(MobileDrawerSVGCloseVisibility));
        setMobileDrawerSVGOpenVisibility(MobileDrawerSVGOpenVisibility = swapVisibility(MobileDrawerSVGOpenVisibility));
    }
    function updateNavDrawerVisibility() {
        setProfileDrawer(ProfileDrawer = swapVisibility(ProfileDrawer));
    }
    function swapVisibility(current) {
        return current == 'hidden' ? 'block' : 'hidden';
    }
    return (
        <nav className="border-b-[1px] border-gray">
            <div className="max-w-7xl mx-6 my-4lg:px-0">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button onClick={updateNavVisibility} type="button" className="inline-flex items-center justify-center p-2 rounded-md  hover:text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className={"h-6 w-6 " + MobileDrawerSVGOpenVisibility} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={"h-6 w-6 " + MobileDrawerSVGCloseVisibility} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to={'/'}><h1 className='logo text-4xl font-[1000] cursor-pointer'>XOCO</h1></Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6 px-16 my-auto">
                            <div className="flex space-x-10">
                                <Link to="/about-us" className="hover:text-black px-3 py-2 rounded-md text-md font-medium">About</Link>
                                <Link to="/products" className="hover:text-black px-3 py-2 rounded-md text-md font-medium">Products</Link>
                                <Link to="/blog" className="hover:text-black px-3 py-2 rounded-md text-md font-medium">Blog</Link>
                                <Link to="/contact-us" className="hover:text-black px-3 py-2 rounded-md text-md font-medium">Contact</Link>
                                <Link to="/faq" className="hover:text-black px-3 py-2 rounded-md text-md font-medium">FAQ</Link>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:ml-6 px-0">
                            <div className="flex space-x-0">
                                <div className="relative text-gray-600 focus-within:text-gray-400">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M21 21l-6-6M18 10a8 8 0 11-16 0 8 8 0 0116 0z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <input type="search" name="q" className="py-2 text-sm text-black bg-gray-50 rounded-lg h-12 pl-10 focus:outline-none focus:bg-gray-100 focus:text-gray-1000" placeholder="Search..." autoComplete="off" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* Profile dropdown */}
                        <div className="ml-3 relative">
                            <div>
                                <button onClick={updateNavDrawerVisibility} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                    <span className="sr-only">Open user menu</span>
                                    <img className="h-10 w-10 rounded-full" src="https://cdn.webxspark.com/assets/images/static-profile.webp" alt="" />
                                </button>
                            </div>
                            <div className={"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 " + ProfileDrawer} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                                {/* Active: "bg-gray-100", Not Active: "" */}
                                <Link to="/" className="block px-4 py-2 text-sm " onClick={updateNavDrawerVisibility} role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
                                <Link to="/" className="block px-4 py-2 text-sm " onClick={updateNavDrawerVisibility} role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</Link>
                                <Link to="/" className="block px-4 py-2 text-sm " onClick={updateNavDrawerVisibility} role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            <div className={"sm:hidden " + MobileDrawerVisibility} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-200 absolute w-full">
                    <Link to="/about-us" className="hover:text-black hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link to="/products" className="hover:text-black hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
                    <Link to="/blog" className="hover:text-black hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                    <Link to="/contact-us" className="hover:text-black hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    <Link to="/faq" className="hover:text-black hover:bg-gray-400 block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
                </div>
            </div>
        </nav>

    )
}
export default AppNav;