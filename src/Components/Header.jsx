import { HiOutlineBadgeCheck } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { Ri24HoursFill } from "react-icons/ri";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const HeaderElements = [
    { key: 1, elements: "Ratings", icon: <HiOutlineBadgeCheck /> },
    { key: 2, elements: "Offer", icon: <BiSolidOffer /> },
    { key: 3, elements: "Help", icon: <Ri24HoursFill /> },
    { key: 4, elements: "Sign In", icon: <RiAccountPinBoxFill /> },
    { key: 5, elements: "Cart", icon: <FaShoppingCart /> },
  ];
  return (
    <div className="flex justify-between items-center px-32 py-5 shadow-lg fixed bg-white top-0 w-screen z-10">
      <div className="flex items-center">
        <img
          className="h-10"
          src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
          alt=""
        />
        <div className="text-[.8em] font-normal text-zinc-700 flex items-center cursor-pointer">
          Jaipur, Rajasthan, India <IoIosArrowDown />
        </div>
      </div>
      <div className="flex gap-9">
        {HeaderElements.map((e) => (
          <a
            key={HeaderElements.key}
            className="font-medium text-sm flex items-center text-zinc-600 gap-1 hover:text-orange-500 transition-all "
            href=""
          >
            {e.icon}
            {e.elements}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
