import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-white text-center">
      <p>© {new Date().getFullYear()} StartupSaaS. All rights reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <Link href="https://twitter.com" className="hover:text-blue-400">
          Twitter
        </Link>
        <Link href="https://github.com" className="hover:text-gray-400">
          GitHub
        </Link>
        <Link href="https://linkedin.com" className="hover:text-blue-500">
          LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
