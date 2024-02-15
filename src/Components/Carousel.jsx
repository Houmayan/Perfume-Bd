import pb from "../assets/perfume/pb-product.svg";
import gucci from "../assets/perfume/gucci-guilty-img.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slide-1.svg";
// Import Swiper styles
import announcement from "../assets/announcement.svg";
import "swiper/css";
import "swiper/css/navigation";

import "../carousel.css";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

// import required modules
import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    // <div className="flex  mt-3 gap-3">
    //   <div className="carousel rounded-[8px] w-full ">
    //     <div id="slide1" className="carousel-item  relative w-full ">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
    //         className="object-contain"
    //       />
    //       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide4" className="btn  border-none bg-transparent hover:bg-transparent">
    //           <img className="bg-transparent" src={leftArrow} alt="" />
    //         </a>
    //         <a href="#slide2" className="btn  border-none bg-transparent hover:bg-transparent">
    //           <img className="bg-transparent" src={rightArrow} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //     <div id="slide2" className="carousel-item relative w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
    //         className="w-full"
    //       />
    //       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide1" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="bg-transparent" src={leftArrow} alt="" />
    //         </a>
    //         <a href="#slide3" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="bg-transparent" src={rightArrow} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //     <div id="slide3" className="carousel-item relative w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
    //         className="w-full"
    //       />
    //       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide2" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="bg-transparent" src={leftArrow} alt="" />
    //         </a>
    //         <a href="#slide4" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="bg-transparent" src={rightArrow} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //     <div id="slide4" className="carousel-item relative w-full">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
    //         className="w-full"
    //       />
    //       <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    //         <a href="#slide3" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="" src={leftArrow} alt="" />
    //         </a>
    //         <a href="#slide1" className="btn  border-none bg-transparent hover:bg-transparent">
    //         <img className="" src={rightArrow} alt="" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Card */}
    //   <div className="flex flex-col">
    //     <div className="card flex-row w-96 bg-base-100 shadow-xl flex-1">
    //       <figure>
    //         <img className="object-contain"
    //           src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //           alt="Shoes"
    //         />
    //       </figure>
    //       <div className="card-body">
    //         <h2 className="card-title">Shoes!</h2>
    //         <p>If a dog chews shoes whose shoes does he choose?</p>
    //         <div className="card-actions justify-end">
    //           <button className="btn btn-primary">Buy Now</button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex-0">
    //       <h1>Free shipping</h1>

    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-col lg:flex-row gap-2 mt-3">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-lg grow w-full md:w-full lg:w-[600px]"
      >
        <SwiperSlide className="">
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="w-[600px] hidden sm:flex md:visible lg:visible flex-col rounded-lg ">
        <div className="h-[300px] flex bg-[#efe2d2]">
          <div className="w-[300px] flex justify-center items-center ">
            <img className="object-contain w-[100px] " src={pb} alt="" />
            <img className="object-contain w-[100px] " src={gucci} alt="" />
          </div>
          <div className="">
            <h2 className="card-title font-rightous font-normal text-nowrap">
              Guccy Guilty
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p className="font-roboto  text-[#1A120]">Variant: Indian</p>
            <p className="font-roboto text-[#1A120]">Type: Oil</p>
            <p className="font-roboto text-[#1A120]">Volume: 30ml</p>
            <div className="flex gap-3 font-rightous">
          <h1 className="flex items-center">
            1200 <FaBangladeshiTakaSign />
          </h1>
          <h1 className="flex items-center">
            
            <strike>1500</strike> <FaBangladeshiTakaSign />
          </h1>
        </div>
          </div>
        </div>
        <div className="h-[200px] ">
          <img className="h-full" src={announcement} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
