import Image from "next/image";
import React from "react";
import RequestInviteBtn from "./RequestInviteBtn";

export default function Footer() {
  return (
    <footer className="h-auto flex flex-col items-center justify-center bg-[#2D314D] md:flex-row md:px-8 md:py-10 lg:py-0 lg:px-40">
      <div className="flex h-auto flex-col items-center justify-between space-y-2 md:w-1/2 md:flex-row md:space-y-0 md:space-x-0 lg:h-[200px]">
        <div className="flex flex-col space-y-6 pt-8 pb-6 md:pb-0 md:pt-0 md:space-y-12">
          <Image
            src="/images/logowhite.svg"
            width="150"
            height="100"
            alt="easy bank logo"
          ></Image>
          <div className="flex space-x-3">
            <Image
              src="/images/icon-facebook.svg"
              width="20"
              height="20"
              alt="facebook"
            ></Image>
            <Image
              src="/images/icon-youtube.svg"
              width="20"
              height="20"
              alt="facebook"
            ></Image>
            <Image
              src="/images/icon-twitter.svg"
              width="20"
              height="20"
              alt="facebook"
            ></Image>
            <Image
              src="/images/icon-pinterest.svg"
              width="20"
              height="20"
              alt="facebook"
            ></Image>
            <Image
              src="/images/icon-instagram.svg"
              width="20"
              height="20"
              alt="facebook"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col space-y-2 text-center text-white md:space-y-0 md:text-left">
          <a>About us</a>
          <a>Contact</a>
          <a>Blog</a>
        </div>
        <div className="flex flex-col space-y-2 text-center text-white md:space-y-0 md:text-left">
          <a>Careers</a>
          <a>Support</a>
          <a>Privacy Policy</a>
        </div>
      </div>
      <div className="flex flex-col items-center pb-8 md:pb-0 space-y-6 md:items-end justify-center mt-8 md:mt-0 md:w-1/2 md:space-y-6">
        <RequestInviteBtn />
        <p className="text-gray-400">©Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
}
