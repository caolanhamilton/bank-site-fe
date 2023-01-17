import Image from "next/image";
import RequestInviteBtn from "./RequestInviteBtn";
import WhyUs from "./WhyUs";

export default function Hero() {
  return (
    <div className="relative flex h-[600px] flex-col items-center justify-start overflow-clip bg-gray-50 pb-5 md:mb-0 md:flex-row md:py-40">
      <div className="h-1/2 md:h-auto">
        <Image
          src="/images/bg-intro-desktop.svg"
          height="200"
          width="1200"
          alt="blobs"
          className="absolute bottom-[370px] right-[-100px] scale-150 md:bottom-[-140px] md:right-[-600px] md:scale-100 lg:right-[-500px] "
        />
        <Image
          src="/images/image-mockups.png"
          height="400"
          width="600"
          alt="mockups"
          className="absolute bottom-[300px] right-[0px] shadow-black drop-shadow-2xl md:bottom-[-60px] lg:bottom-[-60px] md:right-[-350px] lg:right-[-100px]"
        />
      </div>
      <div className="flex w-3/4 flex-col items-center justify-center space-y-8 md:ml-40 md:w-1/2 md:items-start ">
        <h1 className="md:w-76 text-center text-4xl md:text-left md:text-7xl z-20">
          Next generation
          <br className="hidden md:visible" /> digital banking
        </h1>
        <p className="text-gray-400 text-center md:text-left md:w-64 lg:w-96 md:text-lg">
          Take your financial life online. Your Easybank account will be a one-
          <br className="hidden md:visible" />
          stop shop for spending, saving budgeting, investing and much more.
        </p>
        <RequestInviteBtn />
      </div>
    </div>
  );
}
