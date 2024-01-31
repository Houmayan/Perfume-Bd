import safe from "../assets/safe.svg";
import authenticService from "../assets/authentic-service-icon.svg";
import delivery from "../assets/delivery-icon.svg";
import support from "../assets/support-icon.svg";
const OurService = () => {
  return (
    <div className="flex justify-center gap-12 mt-8">
      {/* safe */}
      <div className="flex items-center gap-3 ">
        <img src={safe} alt="" />
        <h1 className="font-normal font-rightous text-[#1A120B]  ">Safe & Secure<br /> Checkout</h1>
      </div>
      {/* secure */}
      <div className="flex items-center gap-3 ">
        <img src={authenticService} alt="" />
        <h1 className="font-normal text-[#1A120B] font-rightous ">100% authentic <br /> perfumes</h1>
      </div>
      {/* super fast */}
      <div className="flex items-center gap-3 ">
        <img src={delivery} alt="" />
        <h1 className="font-normal text-[#1A120B] font-rightous">Super fast  <br />delivery</h1>
      </div>
      {/* customer support */}
      <div className="flex items-center gap-3 ">
        <img src={support} alt="" />
        <h1 className="font-normal text-[#1A120B] font-rightous">Super fast  <br />delivery</h1>
      </div>
     
    </div>
  );
};

export default OurService;
