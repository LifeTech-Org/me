import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { navs } from "../assets/data";
import { Link, useLocation } from "react-router-dom";
import sam from "../assets/sam.jpg";
import { useState } from "react";
function Header() {
  const { pathname } = useLocation();
  const [darkMode, setDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [showMobileNav, setShowMobileNav] = useState(false);
  function setMobileNavDisplay(value: boolean) {
    setShowMobileNav(value);
  }
  function toggleDarkMode() {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setDarkMode(!darkMode);
  }
  return (
    <header
      className={
        (showMobileNav
          ? ""
          : "bg-white/30 backdrop-blur-sm dark:bg-zinc-800/5 ") +
        "flex justify-between items-center  py-3 px-4 sm:px-12 lg:px-24 sticky top-0 md:bg-white/10 md:backdrop-blur-sm z-10 dark:md:bg-zinc-900/1 "
      }
    >
      <Link to={"/"}>
        <div className="h-10 w-10 rounded-full ring-1 ring-zinc-300 p-1 bg-white dark:bg-zinc-900 dark:ring-zinc-800">
          <img
            src={sam}
            alt="samuel"
            className="h-full w-full object-cover rounded-full "
          />
        </div>
      </Link>
      <nav
        className={
          (showMobileNav ? "fixed flex  " : "hidden ") +
          "md:relative md:block justify-center top-0 left-0 right-0 bottom-0 z-10 "
        }
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 md:hidden bg-zinc-800/40 backdrop-blur-sm dark:bg-black/10"
          onClick={() => setMobileNavDisplay(false)}
        ></div>
        <div className="flex flex-col w-full rounded-3xl h-fit mx-4 mt-8 p-8 bg-white z-10 ring-1 ring-zinc-100 md:ring-0 md:w-fit md:p-0  md:m-0 md:bg-transparent dark:bg-zinc-800 dark:ring-zinc-700 ">
          <div className="flex justify-between md:hidden">
            <h3 className="text-zinc-500 font-bold text-sm dark:text-zinc-300">
              Navigation
            </h3>
            <button
              className="text-zinc-500 hover:text-zinc-400 dark:text-zinc-300 dark:hover:text-zinc-100"
              onClick={() => setMobileNavDisplay(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <ul className="flex flex-col divide-y divide-zinc-100 last:border-0 mt-6 md:flex-row  md:items-center md:gap-8 md:divide-y-0 md:bg-white md:rounded-full md:h-10 md:ring-1 md:ring-offset-0 md:ring-zinc-300 md:shadow-md md:shadow-zinc-200 md:px-10 md:p-0 md:m-0 dark:bg-zinc-800 dark:md:ring-zinc-700 dark:md:shadow-none dark:divide-zinc-700">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link
                  to={nav}
                  className={
                    (pathname.split("/").includes(nav)
                      ? "text-black dark:text-white md:text-teal-400 dark:md:text-teal-400 "
                      : "text-black dark:text-white ") +
                    "text-md block py-4  capitalize text-sm hover:text-teal-400 md:flex-col md:relative md:font-semibold  dark:hover:text-teal-400 "
                  }
                  onClick={() => setMobileNavDisplay(false)}
                >
                  {nav}
                  {pathname.split("/").includes(nav) && (
                    <span className="hidden md:inline-flex absolute bottom-0 mb-1.5  left-0 right-0 h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="flex gap-5 ">
        <button
          className="flex h-10 px-3 font-semibold text-sm text-gray-600 items-center gap-2 ring-1 ring-offset-0 ring-zinc-300 rounded-full shadow-md shadow-zinc-200 md:hidden hover:ring-zinc-400 dark:bg-zinc-800 dark:ring-zinc-700 dark:shadow-none dark:text-white dark:hover:ring-zinc-600"
          onClick={() => setMobileNavDisplay(true)}
        >
          <span>Menu</span>
          <ExpandMoreIcon style={{ fontSize: 16 }} />
        </button>
        <button
          title="Change theme"
          className="flex h-10 px-3 font-semibold text-sm text-gray-600 items-center gap-2 ring-1 ring-offset-0 ring-zinc-300 rounded-full shadow-md shadow-zinc-200 hover:ring-zinc-400 dark:bg-zinc-800 dark:ring-zinc-700 dark:shadow-none dark:text-gray-500  dark:hover:ring-zinc-600"
          onClick={toggleDarkMode}
        >
          {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
    </header>
  );
}

export default Header;
