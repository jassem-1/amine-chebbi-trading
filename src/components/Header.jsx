import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { chebbi } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";





const Header = () => {
  const { t } = useTranslation(); // For translations
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full z-50  border-b  border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
    <div className="w-full h-9 bg-black flex items-center justify-between px-16 text-gray-400 text-[12px]">
        {/* Name */}
        <div className="flex items-center space-x-2">
          <FaUser />
          <span>Amine Chebbi</span>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <FaEnvelope />
          <a
            href="mailto:amine@example.com"
            className="hover:underline"
          >
            amine@example.com
          </a>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <FaPhoneAlt />
          <a href="tel:+1234567890" className="hover:underline">
            +123 456 7890
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt />
          <span>Tunis, Tunisia</span>
        </div>
      </div>

      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-6 pt-2 pb-2 ">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <img src={chebbi} width={50} height={30} alt="Brainwave" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 py-4 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl  text-white transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6  lg:-mr-0.25 lg:text-base lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-white"
                    : "lg:text-gray-200"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {t(item.title)} {/* Dynamic translation */}
              </a>
            ))}
          </div>
         

{/*           <LanguageSelector />
 */}          <HamburgerMenu />

        </nav>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
