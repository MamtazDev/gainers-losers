import navBrand from "../../../assets/nav-brand.png";

const Header = () => {
  return (
    <header className="bg-[#73C2FB] py-6">
      <div className="container flex flex-wrap gap-4 lg:gap-0 items-center justify-between px-5">
        <div className="nab_brand">
          <img src={navBrand} alt="nav-brand" />
        </div>
        <button className="py-3 px-8 bg-white rounded-full text-base font-normal text-[#212121]">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;