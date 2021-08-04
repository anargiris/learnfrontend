import Link from "next/link";

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
      <ul className="text-black">
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
