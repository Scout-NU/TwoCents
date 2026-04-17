import {useLocation} from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navLinks = [
    {href: "/home", label: "Home"} ,
    {href: "/about", label: "About"},
    {href: "/pricing", label: "Pricing"}];
    

    return (
        
        <header className="relative flex justify-between items-center gap-2 w-full  bg-white px-7 py-6 z-40 md:z-60">
            <div>
            <img 
            src="/media/Logo.svg"
            className="h-16 md:h-18 w-auto object-contain"
            />
            </div>
            
            {/* Desktop NavBar */}
            <nav className="items-center font-semibold hidden md:flex" >
            <div className="flex gap-10">
                {navLinks.map(({label, href}) => (
                    <a
                        key={label} 
                        href={href} 
                        className={location.pathname === href ? "underline decoration-[0.75px] underline-offset-2" : ""}
                        >
                        {label}
                    </a>
                ))}
                <a className="text-[#FA9E4D] bg-white border border-[#FA9E4D] px-2 rounded-xl pr-4 whitespace-nowrap hover:bg-[#FA9E4D] hover:text-white transition ease-in-out" href="/join-waitlist" >Join Waitlist</a>
            </div>
            </nav>
            {/* Hamburger */}
            <button onClick={() => setOpen(!open)}
            className=" md:hidden flex-col justify-center items-center gap-1.5 w-10 h-8 text-3xl">
            ☰</button>

            <div className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={() => setOpen(false)} className={`absolute top-5 right-5 text-2xl transform transition-transform duration-300 ${open ? "" : "hidden"}`}>✕</button>

            {/* Mobile Dropdown */}
            <nav className=" flex flex-col mt-20 items-center gap-8 text-lg font-semibold">
            {navLinks.map(({label, href}) => (
                <a
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={location.pathname === href ? "underline decoration-[0.75px] underline-offset-2" : ""}
                    >{label}</a>
            ))}
            <a 
            className= {` ${location.pathname === '/join-waitlist' ? "bg-[#FA9E4D] text-white" : ""}  text-[#FA9E4D]  border border-[#FA9E4D] px-2 rounded-xl pr-4 whitespace-nowrap hover:bg-[#FA9E4D] hover:text-white transition ease-in-out`}
            href="/join-waitlist" >Join Waitlist</a>
            </nav>
        </div>
    </header>
    )
}

export default Header;