import Image from "next/image";
import Link from "next/link";
import RequestInviteBtn from "./RequestInviteBtn";

type Props = {
  setNavOpen: (navOpen: boolean) => void;
  navOpen: boolean;
};

export default function Header({ setNavOpen, navOpen }: Props) {
  const links = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <header className="flex flex-row items-center justify-between bg-white py-5 px-4 drop-shadow-lg lg:px-20">
      <Image
        src="/images/logo.svg"
        width="200"
        height="100"
        alt="easy bank logo"
        className="w-[150px] md:w-[200px] "
      ></Image>
      <div className="hidden md:visible md:flex md:space-x-6">
        {links.map((link, index) => {
          {
            return (
              <Link key={index} href={"/"} className="text-lg text-gray-400">
                {link}
              </Link>
            );
          }
        })}
      </div>
      <div className="hidden md:visible md:flex">
        <RequestInviteBtn />
      </div>
      <button
        className="visible mr-1 text-lg md:hidden"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        {navOpen ? (
          <Image
            src="/images/icon-close.svg"
            alt="menu button"
            width="20"
            height="20"
          ></Image>
        ) : (
          <Image
            src="/images/icon-hamburger.svg"
            alt="menu button"
            width="20"
            height="20"
          ></Image>
        )}
      </button>
    </header>
  );
}
