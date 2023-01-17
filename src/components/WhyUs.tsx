import Image from "next/image";
export default function WhyUs() {
  interface Service {
    image: JSX.Element;
    title: string;
    description: string;
  }
  const services: Service[] = [
    {
      image: (
        <Image
          src="/images/icon-online.svg"
          width="100"
          height="100"
          alt="easy bank logo"
        ></Image>
      ),
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      image: (
        <Image
          src="/images/icon-budgeting.svg"
          width="100"
          height="100"
          alt="easy bank logo"
        ></Image>
      ),
      title: "Simple budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your budget",
    },
    {
      image: (
        <Image
          src="/images/icon-onboarding.svg"
          width="100"
          height="100"
          alt="easy bank logo"
        ></Image>
      ),
      title: "Fast Onboarding",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away",
    },
    {
      image: (
        <Image
          src="/images/icon-api.svg"
          width="100"
          height="100"
          alt="easy bank logo"
        ></Image>
      ),
      title: "Open API",
      description:
        "Manage your saving, investments, pensions and much more from one account. Tracking your money has never been easier",
    },
  ];
  return (
    <div className="h-auto px-8 bg-gray-100 py-16 text-center   md:px-40 md:text-left">
      <h2 className="pb-16 text-5xl">Why choose Easybank?</h2>
      <p className="pb-10 text-lg text-gray-400">
        We leverage Open Banking to turn your bank account into your financial
        hub. <br className="hidden lg:visible" /> Control your finances like never before.
      </p>

      <div className="flex flex-col items-center justify-between md:flex-row md:space-x-6">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center space-y-6 pb-6 text-center md:w-1/5 md:space-y-4 md:pb-0 md:text-left"
            >
              {service.image}
              <h3 className="text-lg">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
