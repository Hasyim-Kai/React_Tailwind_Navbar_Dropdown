/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import NavbarItemDropdown from './NavbarItemDropdown';
// import { Link } from "react-router-dom";

export default function Navbar() {

    // let [isLoggedIn, setIsLoggedIn] = useState(false);
    // function handleLogOut() { setIsLoggedIn(false) };

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    function handleSetMobileNavOpen() { setMobileNavOpen(!isMobileNavOpen) };
    // function handleNavChangePage() { setMobileNavOpen(false) };

    return <nav className="bg-blue-700 shadow-md fixed w-full z-50">
        {/* <!-- container --> */}
        <div className="container flex flex-wrap justify-between px-4 py-2 mx-auto lg:space-x-4">
            {/* <!-- brand --> */}
            <a href="#" className="inline-flex p-2 text-xl font-bold tracking-wider text-white uppercase">brand</a>
            {/* <!-- brand --> */}
            {/* <!-- toggler btn --> */}
            <button onClick={handleSetMobileNavOpen} className="inline-flex items-center justify-center w-10 h-10 ml-auto text-white border rounded-md outline-none lg:hidden focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* <!-- toggler btn -->
                <!-- menu --> */}
            <div className={`w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${isMobileNavOpen ? 'flex' : 'hidden'}`}>
                <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
                    <li>
                        <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Orders</a>
                    </li>
                    <li>
                        <a href="#" className="flex px-4 py-2 font-medium text-white rounded-md hover:bg-blue-800">Invoices</a>
                    </li>

                    {/* <!-- dropdown --> */}
                    <NavbarItemDropdown />
                {/* <!-- dropdown --> */}
            </ul>
        </div>
        {/* // <!-- menu --> */}
    </div>
    {/* // <!-- container --> */ }
    </nav >;
}