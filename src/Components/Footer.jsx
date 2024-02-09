import logoLight from "../assets/logo-light.svg";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import cod from "../assets/cod.svg";
import bkash from "../assets/bkash.svg";
import nagad from "../assets/nagad.svg";
import rocket from "../assets/rocket.svg";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const perfumeBrands = (
    <>
      <li>
        <Link style={{ display: "inline-block" }}>Dolce & Gabbana</Link>
      </li>
      <li>
        <Link>Gucci</Link>
      </li>
      <li>
        <Link>Calvin Klein</Link>
      </li>
      <li>
        <Link>Armani</Link>
      </li>
      <li>
        <Link>Bvlgari</Link>
      </li>
      <li>
        <Link>Dolce & Gabbana</Link>
      </li>
      <li>
        <Link>Gucci</Link>
      </li>
      <li>
        <Link>Calvin Klein</Link>
      </li>
      <li>
        <Link>Armani</Link>
      </li>
      <li>
        <Link>Bvlgari</Link>
      </li>
      <li>
        <Link>Dolce & Gabbana</Link>
      </li>
      <li>
        <Link>Gucci</Link>
      </li>
      <li>
        <Link>Calvin Klein</Link>
      </li>
      <li>
        <Link>Armani</Link>
      </li>
      <li>
        <Link>Bvlgari</Link>
      </li>
    </>
  );
  const perfumeBd = (
    <>
      <li><Link to={'#'}>Authenticity guaranteed</Link></li>
      <li><Link to={'#'}>Return/Refund Policy</Link></li>
      <li><Link to={'#'}>Terms and Condition</Link></li>
      <li><Link to={'#'}>Privacy Policy</Link></li>
      <li><Link to={'#'}>About Perfume BD</Link></li>
      <li><Link to={'#'}>Contact Perfume BD</Link></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </>
  );

  const categories = <>
  <li><Link to={''}>Perfume Oil</Link></li>
  <li><Link to={''}>Spray Perfume</Link></li>
  <li><Link to={''}>Attar</Link></li>
  <li><Link to={''}>Men's Collection</Link></li>
  <li><Link to={''}>Women's Collection</Link></li>
  </>
  const moreProducts = <>
  <li><Link to={''}>T-Shirt</Link></li>
  <li><Link to={''}>Quran</Link></li>
     
  </>
  const earn = <>
  <li><Link to={''}>Sell on Perfume BD</Link></li>
  <li><Link to={''}>Join the Affiliate Program </Link></li>
     
  </>
  return (
    <footer className="pt-10 bg-[#f2eee2] mt-[100px] rounded-[15px]">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">

        {/* Top part */}
        <div className="flex flex-col md:flex-row lg:flex-row gap-12 justify-between sm:flex ">
          {/* upper footer left*/}
          <div className="space-y-6 flex-2">
            <img src={logoLight} className="w-72" />
            <h1 className="font-rightous text-[#1A120B] text-xl">
              Authenticity
            </h1>
            <p className="max-w-md font-roboto">
              All products sold in our shop are authentic and guaranteed. We
              purchase our inventory via authorized dealers. Click here for
              details
            </p>
            <p className="font-rightous text-[#876445]">
              Click here for details
            </p>
            <h1 className="text-[#1A120B] text-xl font-rightous">Contact</h1>
            <p className="text-[#876445] flex items-center gap-[10px] font-roboto">
              <IoMdCall size={25} />
              +8801400492967
            </p>
            <p className="text-[#876445] flex items-center gap-[10px] font-roboto">
              <MdEmail size={25} />
              perfumebd.official@gmail.com
            </p>
            <p className="flex gap-[10px] items-center font-roboto">
              <HiOutlineHomeModern size={25} color="#876445" />3 no bundle road,
              patharghata, chattogram - 4000
            </p>
          </div>
          {/* upper footer middle*/}
          <div className="space-y-3 flex-1">
            <h1 className="text-[#1A120B] font-rightous text-xl">
              Countrywide Delivery
            </h1>
            <p className="text-[#1A120B] font-roboto">
              We delever anywhere in Bangladesh through our reputed delivery
              partner REDX.
            </p>
            <p className="text-[#876445] font-rightous">Inside Chattogram</p>
            <p className="font-roboto text-[#1A120B]">
              Time: 1-2 Days <br />
              Charge: 80/= TK
            </p>
            <p className="text-[#876445] font-rightous">Outside Chattogram</p>
            <p className="font-roboto text-[#1A120B]">
              Time: 2-5 Days <br />
              Charge: 120 /= TK
            </p>
          </div>
          {/* upper footer  right*/}
          <div className="space-y-3 flex-1">
            <h1 className="text-[#1A120B] font-rightous text-xl">
              Return / Refund Policy
            </h1>
            <p className="text-[#1A120B] font-roboto">
              We offer returns within 10 working days of purchase for store
              credit, a different product, or a refund to the original payment
              method. However, branded perfume items are sealed (sealed open
              branded items are forbidden to return). The item must be unused
              and in the same condition that the customer received them. The
              item must be in the original packaging. The item needs to have the
              receipt or proof of purchase.
            </p>
          </div>
        </div>
        
                {/* Middle Part */}
        <div className="mt-12 hidden justify-between sm:flex md:visible lg:visible">
          <div className="flex-1">
            <h1 className="text-[#1A120B] text-xl font-rightous">
              Perfume Brands
            </h1>
            <div className="mt-[10px]">
              <ul className="grid grid-cols-3 gap-[10px] font-roboto text-[#1A120B]">{perfumeBrands}</ul>
            </div>
          </div>
          <div>
            <h1 className="text-[#1A120B] text-xl font-rightous">Perfume BD</h1>
            <ul className="flex flex-col gap-[10px] mt-[10px] font-roboto text-[#1A120B]">
                {perfumeBd}
            </ul>
          </div>
        </div>


        {/* last Part */}

        <div className="hidden justify-between sm:flex md:visible lg:visible">
                <div className="">
                  <h1 className="font-rightous text-xl mb-[10px] text-[#1A120B]">Shop By Categories</h1>
                  <ul className="space-y-[10px] font-roboto text-[#1A120B]">
                    {categories}
                  </ul>
                </div>

                <div>
                  <h1 className="font-rightous text-xl mb-[10px] text-[#1A120B]">More Products</h1>
                  <ul className="space-y-[10px] font-roboto text-[#1A120B]">
                    {moreProducts}
                  </ul>
                </div>

                <div>
                  <h1 className="font-rightous text-xl mb-[10px] text-[#1A120B]">Earn With Perfume BD</h1>
                  <ul className="space-y-[10px] font-roboto text-[#1A120B]">
                    {earn}
                  </ul>
                </div>

                <div>
                  <h1 className="font-rightous text-xl mb-[10px] text-[#1A120B]">Payment Method</h1>
                  <div className="flex gap-[10px]">
                    <img src={cod} alt="" />
                    <img src={bkash} alt="" />
                  </div>
                  <div className="flex gap-[10px] mt-[10px]">
                    <img src={nagad} alt="" />
                    <img src={rocket} alt="" />
                  </div>
                </div>
        </div>


        {/* Copyright part */}
        <div className="mt-10 py-10 border-t md:text-center flex gap-[10px] flex-col md:flex-row lg:flex-row justify-between">
          <div className="text-left">
          <p className="text-[#87644580]">
            © Copyrights 2020 - 2024 | Perfume BD All Rights Reserved{" "}
          </p>
          <p className="text-[#87644580]">
            
            &lt;/&gt; design & developed by{" "}
            <span className="text-[#978c81]">
              Towfique Elahe & Houmayan Rashid Chy
            </span>
          </p>
          </div>

          <div className="flex justify-center items-center gap-[10px]">
          <FaYoutube  size={30}/>
          <FaFacebook  size={30}/>
          <FaLinkedin  size={30}/>
          <LuInstagram size={30}/>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
