import Link from "next/link";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white">
      <Link href="/">
        <div className="text-2xl cursor-pointer leading-tight text-center font-mont">
          <span className="text-blue-primary font-black ">LEARN</span>
          <span className="text-yellow-primary font-black ">FRONT</span>
          <span className="text-blue-strong font-black ">END</span>
        </div>
      </Link>
      <ul className="text-blue-strong flex gap-5 mr-20 font-mont">
        <Link href="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Dropdown />
      </ul>
    </nav>
  );
};

export default Navbar;
