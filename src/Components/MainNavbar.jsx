import { GoSearch } from "react-icons/go";
import { IoMdHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import menuBtn from "../assets/menu-btn.svg";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

const MainNavbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink >ja icca</NavLink>
      </li>
      <li>
        <NavLink>Ja Icca 2</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar justify-between bg-[#efe2d2] rounded-xl mt-1 px-5 ">
      <div className="gap-4 flex-0">
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img className="h-12" src={logo} alt="perfumeBd Logo" />
        <ul className="menu hidden sm:flex md:visible lg:visible menu-horizontal px-1">
          <li>
            <details>
              <summary className="font-medium">Categories</summary>
              <ul className="p-2 space-y-4 !bg-[#efe2d2] rounded-t-none z-10">
              <Link className="!white">{navLinks}</Link>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      {/* <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}

      <div className="hidden sm:flex md:visible lg:visible flex-1 flex-row justify-center ">
        <input
          type="text"
          placeholder="Perfume Oil"
          className="input input-bordered !rounded-r-none w-2/3"
        />
        <button>
          <GoSearch
            className="  p-2 bg-black rounded-l-none rounded-r-lg w-[45px] h-[46px]"
            color="white"
          />
        </button>
      </div>

      <div className="hidden sm:flex md:visible lg:visible gap-5 flex-0">
        <IoMdHeart size={30} />
        <IoMdCart size={30} />
        <IoPerson size={30} />

        <button className="btn bg-[#3C2A21] text-[#FFFCF6] uppercase font-rightous">
          custom order
        </button>
      </div>
      {/* burger */}
      <div className="visible md:hidden lg:hidden">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <img src={menuBtn} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] absolute -right-5 !bg-[#efe2d2] shadow  rounded-box s"
          >
            <Link className="!white">{navLinks}</Link>
            <li>
              <Link>Custom Order</Link>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
