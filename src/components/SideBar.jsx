const SideBar = ({ text }) => {
  return (
    <div className="w-full md:w-[70%] text-white h-14 border-b border-b-white/15 flex items-center justify-between">
      <h2>{text}</h2>
      <img
        src="/plus.png"
        alt=""
        className="w-4 h-4 invert hover:rotate-45 transition-all"
      />
    </div>
  );
};

export default SideBar;
