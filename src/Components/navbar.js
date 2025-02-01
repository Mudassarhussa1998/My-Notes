import { useState  } from "react";
import { PaperAirplaneIcon, MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";



const Navbar = () => {

  let location = useLocation();
  


  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex mx-auto justify-between w-full">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-10 my-8">
            {/* Logo */}
            <div>
              <a href="/" className="flex gap-1 font-bold text-gray-700 items-center">
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>Paper.io</span>
              </a>
            </div>
                  <div className="hidden lg:flex gap-8">
                    <a href="/home" className={`${location.pathname === "/home" ? "font-bold" : ""}`}>Home</a>
                    <a href="/login" className={`${location.pathname === "/login" ? "font-bold" : ""}`}>Login</a>
                    <a href="/signup" className={`${location.pathname === "/signup" ? "font-bold" : ""}`}>Signup</a>
                    <a href="/aboutus" className={`${location.pathname === "/aboutus" ? "font-bold" : ""}`}>About us</a>
                  </div>
                  <form className="hidden lg:flex items-center gap-4 ml-[200px]">
                    <input className="border-solid border-2 border-gray-300 rounded py-1 px-2 w-[400px]" placeholder="Search">
                    </input>
                    <button className="rounded"
                    type="submit">
                    Search
                    </button>
                  </form>

                  </div>
                  {/* Secondary navigation */}
          <div className="flex gap-6">
            <div className="hidden xs:flex items-center gap-10">
              <div className="hidden lg:flex items-center gap-2">
                <MoonIcon className="h-6 w-6" />
                <SunIcon className="h-6 w-6" />
              </div>
              <div>
                <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                  Free Trial
                </button>
              </div>
            </div>
            {/* Mobile navigation toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile navigation */}
      <div
        className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
          !toggleMenu ? "h-0" : "h-full"
        }`}
      >
        <div className="px-8">
          <div className="flex flex-col gap-8 font-bold tracking-wider">
            <form className="flex items-center gap-4">
              <input className="border-solid border-2 border-gray-300 rounded py-1 px-2 w-[400px]" placeholder="Search">
              </input>
              <button className="rounded"
                type="submit">
                Search
              </button>
            </form>
            <a href="/features" className="border-l-4 border-gray-600">
              Features
            </a>
            <a href="/home">home</a>
            <a href="/aboutus">about us</a>
            <a href="/login">login</a>
            <a href="/signup">signup</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
