/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import s from "./NavbarPureCss.module.css"
import NavbarItemDropdown from './NavbarItemDropdown';

export default function NavbarPureCss() {
    const [isMobileNavOpen, setMobileNavOpen] = useState<Boolean>(false);
    function handleSetMobileNavOpen() { setMobileNavOpen(!isMobileNavOpen) };

    return <nav className={`${s.navContainer}`}>
        <h1>Logo</h1>
        <button className={s.navBtn} onClick={handleSetMobileNavOpen}>Nav</button>
        <div className={`${isMobileNavOpen ? s.navItemContainer:s.navItemContainerHidden}`}>
            <p>home</p>
            <p>About</p>
            <p>Contact</p>
            <NavbarItemDropdown />
        </div>
    </nav >;
}