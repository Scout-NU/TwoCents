import {useLocation} from "react-router-dom";

const Header = () => {

    const location = useLocation();
    

    return (
        <header className=" flex justify-between items-center gap-2 bg-white px-7 py-6 border-black border ">
            <div className="relative">
            <div className=" whitespace-nowrap mr-8 text-2xl">
                <span className="text-[#FA9E4D]"> Two  </span><span className="text-[#52AEEF]"> Cents </span>
            </div>
            <img  className="w-12 absolute top-1 right-19" src="/images/centy-bill.png"></img>
            </div>
            <nav className="flex gap-10 items-center font-semibold">
                <a href="/home" className={location.pathname === "/home" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Home</a>
                <a href="/about"  className={location.pathname === "/about" ? "underline decoration-[0.75px] underline-offset-2" : ""}>About</a>
                <a href="/pricing"  className= {location.pathname === "/pricing" ? "underline decoration-[0.75px] underline-offset-2" : ""}>Pricing</a>
                <a className="text-[#FA9E4D] bg-white border border-[#FA9E4D] px-2 rounded-xl pr-4 whitespace-nowrap hover:bg-[#FA9E4D] hover:text-white transition ease-in-out" href="/join-waitlist" >Join Waitlist</a>
            </nav>
        </header>
    )
}

export default Header