import { useState, useRef } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const NavbarItemDropdown = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = () => { setIsOpen((state) => !state) }
    const closePopUp = () => { setIsOpen(false) }
    useClickOutside(isOpen, ref, closePopUp);

    return (
        <div className="relative" ref={ref}>
            <button className="" onClick={handleChange}>Dropdown</button>

            <div className={`dropdown ${isOpen ? "show" : "hide"}`}>
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