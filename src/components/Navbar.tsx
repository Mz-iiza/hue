const Navbar = () => {
  return (
    <nav className="h-[100px]">
      <div className="flex justify-around items-center h-full">
        <div className="flex items-center">
          <h1 className="font-[Telma]">Glamour girls</h1>
        </div>
        <div className="bg-[#D9D9D9AD] rounded-[40px] py-4 px-12">
          <ul className="flex gap-10 text-[#5e3516de]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Galm girls</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <button>Become a member</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
