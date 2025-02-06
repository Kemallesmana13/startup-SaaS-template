import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6 bg-white dark:bg-gray-900 shadow-md">
      <Link href="/" className="text-4xl md:text-3xl font-bold text-blue-600 dark:text-white">
        StartupSaaS
      </Link>
      <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <li>
          <Link href="/" className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Beranda
          </Link>
        </li>
        <li>
          <Link href="/pricing" className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Harga
          </Link>
        </li>
        <li>
          <Link href="/testimonials" className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Testimoni
          </Link>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <Link href="/free-trial" className="px-4 py-2 text-lg md:text-xl bg-blue-600 text-white rounded-md">
          Coba Gratis
        </Link>
        <DarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
