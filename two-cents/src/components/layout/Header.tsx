/* eslint-disable react-hooks/set-state-in-effect */
import { useLocation, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './Header.css';
import { Button } from "../buttons/PrimaryButton";

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);    
    const [scrolled, setScrolled] = useState(false);


    // Replace your two useEffects with one:
useEffect(() => {
    const handleScroll = () => {
        const currentY = window.scrollY;
        const diff = lastScrollY.current - currentY;

        setScrolled(currentY > 10);

        if (diff > 0) {
            setVisible(true);
        } else if (diff < -5) {
            setVisible(false);
        }

        lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

    useEffect(() => {
        setVisible(true);
        setScrolled(false);
        lastScrollY.current = window.scrollY;
    }, [location.pathname]);

    const handleMouseEnter = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setDropdownOpen(false), 100);
    };

    return (
        <header
            className="flex justify-between items-center gap-2 w-full px-7 py-2"
            style={{
                position: "sticky",
                top: 0,
                zIndex: 60,
                transform: visible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: scrolled ? "rgba(255, 255, 255, 0.75)" : "#ffffff",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.3)" : "none",
                boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.06)" : "none",
            }}
        >

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
                    <div
                        className="header-dropdown-trigger"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{ position: "relative" }}
                    >
                        <span className="header-nav-link header-dropdown-label">About</span>

                        <div
                            className="header-dropdown-menu"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                paddingTop: "20px",
                                visibility: dropdownOpen ? "visible" : "hidden",
                                opacity: dropdownOpen ? 1 : 0,
                                pointerEvents: dropdownOpen ? "auto" : "none",
                            }}
                        >
                            <Link to="/features" className="header-dropdown-item">Features</Link>
                            <Link to="/mission" className="header-dropdown-item">Our Mission</Link>
                        </div>
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
                <div
    className={`fixed top-0 right-0 h-full w-2/3 bg-white transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
    style={{
        zIndex: 100,
        backgroundColor: "#ffffff",
        height: "100vh",
        boxShadow: "-4px 0 20px rgba(0, 0, 0, 0.1)",
    }}
>                <button
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
