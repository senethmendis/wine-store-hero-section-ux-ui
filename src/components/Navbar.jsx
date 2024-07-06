const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-white/15 pb-7  mx-auto px-10 md:px-0">
      <div className="flex items-center">
        <img src="/app.png" alt="" className="invert w-10 h-10 md:hidden" />
        <ul className="hidden md:flex gap-8 text-xl font-semibold">
          <li className="cursor-pointer">Category</li>
          <li className="cursor-pointer">Lifestyle</li>
          <li className="cursor-pointer">Store</li>
        </ul>
      </div>
      <div className="flex gap-8 ">
        <ul className="md:flex items-center hidden gap-10">
          <li className="cursor-pointer">
            <img src="/heart.png" alt="" className="w-5 h-5 invert" />
          </li>
          <li className="cursor-pointer">
            <img src="/bag.png" alt="" className="w-5 h-5 invert" />
          </li>
        </ul>
        <div>
          <img src="/fox.png" alt="" className="w-8 h-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
