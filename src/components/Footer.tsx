import { navs } from "../assets/data";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="w-full border-t border-zinc-100 pt-10 pb-16 flex items-center flex-col sm:px-4 md:px-12 lg:px-24 lg:flex-row lg:items-align lg:justify-between  dark:border-zinc-800 ">
      <ul className="flex gap-8">
        {navs.map((nav, index) => (
          <li key={index}>
            <Link
              to={nav}
              className="font-semibold text-zinc-700 text-sm capitalize hover:text-teal-400 dark:text-white dark:hover:text-teal-400"
            >
              {nav}
            </Link>
          </li>
        ))}
      </ul>
      <address className="mt-8 text-zinc-400 text-sm not-italic font-semibold lg:mt-0">
        &copy; {new Date().getFullYear().toString()}{" "}
        <a href="https://wa.me/+2348149120163">Samuel Ayetigbo. </a>{" "}
        <span>All rights reserved.</span>
      </address>
    </footer>
  );
}
export default Footer;
