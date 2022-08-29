import { useState, useEffect, useRef } from "react";

const NavbarItemDropdown = () => {
    const wrapperRef = useRef<any>(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    function handleSetDropdownOpen() { setDropdownOpen(!isDropdownOpen); }

    useEffect(() => {
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    return (
        <div className="relative" ref={wrapperRef}>
            <button className="text-white mt-2" onClick={handleSetDropdownOpen}>Dropdown</button>

            {/* <!-- dropdown menu --> */}
            <div className={`absolute -right-7 p-5 mt-1 bg-white rounded-xl border shadow-xl 
                ${isDropdownOpen ? "flex flex-col" : "hidden"} max-h-96 overflow-y-scroll z-50`}>
                <ul className="lg:w-96 w-72">
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                    <li>
                        <p>Item</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavbarItemDropdown;