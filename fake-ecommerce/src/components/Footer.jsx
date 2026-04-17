import { FaInstagram, FaXTwitter, FaFacebook } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="bg-base-300 mt-10 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center gap-3">
        <p className="text-xl font-bold">🛍️ Fake Store</p>
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-pink-500 "
          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-gray-500"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-500"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Fake Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
