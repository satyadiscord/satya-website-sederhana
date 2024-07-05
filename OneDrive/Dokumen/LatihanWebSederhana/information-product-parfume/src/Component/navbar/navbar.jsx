import { useState, useEffect } from "react";
import { linksNavbar } from "./dataLink-navbar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full p-6 flex items-center z-[100] transition-shadow duration-300 ${
          hasShadow ? "shadow-lg" : ""
        } bg-white`}
      >
        <div className="font-semibold md:pt-5 text-2xl tracking-[4px] font-[arial]">
          SatParfume
        </div>
        <div className="text-3xl absolute right-8 top-[29px] md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
          </button>
        </div>
        <ul
          className={`absolute top-[100px] z-[50] right-[0px] bg-gray-800 w-[300px] md:h-0 text-white md:bg-transparent md:text-black md:static md:ml-auto md:w-[500px] md:justify-between md:flex transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-x-0 md:translate-x-0 z-50"
              : "translate-x-full hidden md:translate-x-0 z-50"
          }`}
        >
          {linksNavbar.map(({ name, link }, index) => (
            <li key={index} className="my-7 p-6 md:p-0 md:my-0">
              <a
                href={link}
                className="font-semibold font-[arial] text-lg hover:text-gray-500 md:hover:underline"
              >
                {name}
              </a>
              <br className="md:hidden" /> <br className="md:hidden" />
              <hr className="md:hidden" />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
