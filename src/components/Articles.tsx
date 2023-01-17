import Image from "next/image";

export default function Articles() {
  interface Article {
    title: string;
    description: string;
    image: JSX.Element;
    author: string;
  }
  const articles: Article[] = [
    {
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single…",
      image: (
        <Image
          src="/images/image-currency.jpg"
          width="300"
          height="100"
          alt="easy bank logo"
          className="h-full w-full rounded-t-lg object-cover"
        ></Image>
      ),
      author: "Claire Robinson",
    },
    {
      title: "Treat yourself without worrying about money",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      image: (
        <Image
          src="/images/image-restaurant.jpg"
          width="100"
          height="100"
          alt="restaurant table"
          className="h-full w-full rounded-t-lg object-cover"
        ></Image>
      ),
      author: "Wilson Hutton",
    },
    {
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you …",
      image: (
        <Image
          src="/images/image-plane.jpg"
          width="100"
          height="100"
          alt="view from plane window"
          className="h-full w-full rounded-t-lg object-cover"
        ></Image>
      ),
      author: "Wilson Hutton",
    },
    {
      title: "Our invite-only Beta accounts are now live!",
      description:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
      image: (
        <Image
          src="/images/image-confetti.jpg"
          width="100"
          height="100"
          alt="confetti"
          className="h-full w-full rounded-t-lg object-cover"
        ></Image>
      ),
      author: "Claire Robinson",
    },
  ];
  return (
    <div className="h-auto bg-gray-50 px-8 py-16 md:px-40">
      <h2 className="pb-12 text-center text-5xl lg:text-left lg:text-6xl lg:text-5xl">
        Latest Articles
      </h2>
      <div className="flex flex-col space-x-4 space-y-6 lg:flex-row lg:space-y-0">
        {articles.map((article, index) => {
          return (
            <div
              key={index}
              className="flex h-[400px] flex-col rounded-lg bg-white pb-10 lg:w-1/2 lg:w-1/4"
            >
              <div className="mb-4 h-1/2 w-full">{article.image}</div>

              <div className="h-1/2 space-y-2 px-6">
                <p className="text-xs text-gray-400">By {article.author}</p>
                <h3 className="text-md">{article.title}</h3>
                <p className="text-sm text-gray-400">{article.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
