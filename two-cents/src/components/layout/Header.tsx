import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import './Header.css';
import { Button } from "../buttons/PrimaryButton";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);



    return (
        <header className="header-root relative flex justify-between items-center gap-2 w-full bg-white px-7 py-6 z-40 md:z-60">
            <div>
                <img
                    src="/media/Logo.svg"
                    className="h-16 md:h-18 w-auto object-contain"
                />
            </div>

            {/* Desktop NavBar */}
            <nav className="items-center font-semibold hidden md:flex">
                <div className="header-nav flex gap-10 items-center">

                    <Link
                        to="/"
                        className={`header-nav-link ${location.pathname === "/" ? "underline decoration-[0.75px] underline-offset-2" : ""}`}
                    >
                        Home
                    </Link>

                    {/* About dropdown */}
                    {/* About dropdown */}
                    <div
                        className="header-dropdown-trigger"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <span className="header-nav-link header-dropdown-label">About</span>
                        {dropdownOpen && (
                            <div className="header-dropdown-menu">
                                <Link to="/features" className="header-dropdown-item">Features</Link>
                                <Link to="/mission" className="header-dropdown-item">Our Mission</Link>
                            </div>
                        )}
                    </div>

                    <Link
                        to="/pricing"
                        className={`header-nav-link ${location.pathname === "/pricing" ? "underline decoration-[0.75px] underline-offset-2" : ""}`}
                    >
                        Pricing
                    </Link>

                    <Button variant="secondary" to="/waitlist">
                        Join waitlist
                    </Button>

                </div>
            </nav>

            {/* Hamburger */}
            <button
                onClick={() => setOpen(!open)}
                className="md:hidden flex-col justify-center items-center gap-1.5 w-10 h-8 text-3xl"
            >
                ☰
            </button>

            {/* Mobile slide-in menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"}`}>
                <button
                    onClick={() => setOpen(false)}
                    className={`absolute top-5 right-5 text-2xl transform transition-transform duration-300 ${open ? "" : "hidden"}`}
                >✕</button>

                <nav className="flex flex-col mt-20 items-center gap-8 text-lg font-semibold">
                    <Link to="/" onClick={() => setOpen(false)} className={location.pathname === "/" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Home</Link>
                    <Link to="/features" onClick={() => setOpen(false)} className={location.pathname === "/features" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Features</Link>
                    <Link to="/mission" onClick={() => setOpen(false)} className={location.pathname === "/mission" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Our Mission</Link>
                    <Link to="/pricing" onClick={() => setOpen(false)} className={location.pathname === "/pricing" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Pricing</Link>
                    <Link to="/waitlist" onClick={() => setOpen(false)} className={location.pathname === "/waitlist" ? "underline decoration-[0.75px] underline-offset-2" : ""}>
                        Join Waitlist
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
