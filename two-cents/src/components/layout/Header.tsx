import { NavLink } from "react-router-dom";
import { useState } from "react";


const Header = () => {
    const [open, setOpen] = useState(false);
    const navLinks = [
    {href: "/home", label: "Home"} ,
    {href: "/about", label: "Our Mission"},
    {href: "/pricing", label: "Pricing"}];
    

    return (
        
        <header className="relative flex justify-between items-center gap-2  border bg-white px-7 py-6">
            {/* Logo */}
            <div className="relative">
                <div className=" whitespace-nowrap mr-8 text-2xl">
                    <span className="text-[#FA9E4D]"> Two  </span><span className="text-[#52AEEF]"> Cents </span>
            </div>
            <img  className="w-12 absolute top-1 right-19" src="/images/centy-bill.png"></img>
            </div>

            {/* Desktop NavBar */}
            <nav className="items-center font-semibold hidden md:flex" >
            <div className="flex gap-10">
                {navLinks.map(({label, href}) => (
                    <NavLink
                        key={label} 
                        to={href} 
                        className={({ isActive }) => isActive ? "underline decoration-[0.75px] underline-offset-2" : ""}
                        >
                        {label}
                    </NavLink>
                ))}
                
                <NavLink
                  className={({ isActive }) => `${isActive ? "bg-[#FA9E4D] text-white" : "bg-white text-[#FA9E4D]"} border border-[#FA9E4D] px-2 rounded-xl pr-4 whitespace-nowrap hover:bg-[#FA9E4D] hover:text-white transition ease-in-out`}
                  to="/join-waitlist"
                >
                  Join Waitlist
                </NavLink>
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
                                <NavLink
                    key={label}
                                        to={href}
                    onClick={() => setOpen(false)}
                                        className={({ isActive }) => isActive ? "underline decoration-[0.75px] underline-offset-2" : ""}
                                        >{label}</NavLink>
                        ))}
                        <NavLink
                            className={({ isActive }) => `${isActive ? "bg-[#FA9E4D] text-white" : "bg-white text-[#FA9E4D]"} border border-[#FA9E4D] px-2 rounded-xl pr-4 whitespace-nowrap hover:bg-[#FA9E4D] hover:text-white transition ease-in-out`}
                            onClick={() => setOpen(false)}
                            to="/join-waitlist"
                        >
                            Join Waitlist
                        </NavLink>
            </nav>
        </div>
    </header>
    )
}

export default Header;