import Section from "./Section";
import { FaInstagram, FaFacebookF, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md"; // Assuming XM is represented with a relevant icon

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-4 bg-orange-950 bg-opacity-80">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-white lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Social Media Links */}
        <ul className="flex gap-5 flex-wrap">
          {/* Instagram */}
          <li className="rounded-full border p-2 hover:bg-zinc-700">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </li>

          {/* Facebook */}
          <li className="rounded-full border p-2  hover:bg-zinc-700">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaFacebookF size={24} />
            </a>
          </li>

          {/* Telegram */}
          <li className="rounded-full border p-2  hover:bg-zinc-700">
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaTelegramPlane size={24} />
            </a>
          </li>

          {/* YouTube */}
          <li className="rounded-full border p-2  hover:bg-zinc-700">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <FaYoutube size={24} />
            </a>
          </li>

          {/* XM (Trading Platform) */}
          <li className="rounded-full border p-2  hover:bg-zinc-700">
            <a
              href="https://www.xm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-colors"
            >
              <MdTrendingUp size={24} /> {/* XM represented with a trending-up icon */}
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
