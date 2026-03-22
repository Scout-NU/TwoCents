import { useState } from "react";
import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();
    

    return (
        <header className="flex justify-between items-center gap-2 bg-white px-7 py-4 border-black border ">
            <div >
                Two Cents
            </div>
            <nav className="flex gap-10 items-center font-semibold">
                <a href="/home" className={location.pathname === "/home" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Home</a>
                <a href="/about"  className={location.pathname === "/about" ? "underline decoration-[0.75px] underline-offset-2" : ""}>About</a>
                <a href="/pricing"  className= {location.pathname === "/pricing" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Pricing</a>
                <a className="tc-orange px-2 rounded-xl border"href="/join-waitlist">Join Waitlist</a>
            </nav>
        </header>
    )
}

export default Header