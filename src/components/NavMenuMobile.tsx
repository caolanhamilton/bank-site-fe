export default function NavMenuMobile() {
  const navMenuItems = ["Home", "About", "Contact", "Blog", "Careers"];
  return (
    <div className="absolute top-20 left-0 right-0 mx-auto w-4/5 bg-white rounded-lg md:hidden space-y-6 py-6 z-20 shadow-2xl shadow-black ">
      {navMenuItems.map((item, index) => {
        return (
            <a key={index} className="text-center text-lg font-semibold text-black flex items-center justify-center">{item}</a>
        );
      })}
    </div>
  );
}
