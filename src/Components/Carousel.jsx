import pb from '../assets/perfume/pb-product.svg';
import gucci from '../assets/perfume/gucci-guilty-img.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../assets/slide-1.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../carousel.css";

// import required modules
import { Navigation } from "swiper/modules";
const Carousel = () => {
  return (
    // <div className="flex  mt-3 gap-3">
    //   <div className="carousel rounded-[8px] w-full ">
    //     <div id="slide1" className="carousel-item  relative w-full ">
    //       <img
    //         src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
    //         className="object-cover"
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
    //         <img className="object-cover"
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
    <div className="flex gap-2 mt-3">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper rounded-lg grow w-[600px]"
      >
        <SwiperSlide className="">
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>
      
      <div className='w-[600px]  grow-0 rounded-lg '>
        <div className='h-2/3 flex bg-red-600'>
          <div className="w-1/2 flex justify-center items-center ">
            <img className='object-contain' src={pb} alt="" />
            {/* <img className='object-contain' src={gucci} alt="" /> */}
          </div>
          <div className="w-1/2">
          <h2 className="card-title font-rightous font-normal">
          Bleu De Chanel
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="font-roboto  text-[#1A120]">Variant: Indian</p>
        <p className="font-roboto text-[#1A120]">Type: Oil</p>
        <p className="font-roboto text-[#1A120]">Volume: 30ml</p>
          </div>
        </div>
        <div className='h-1/3 bg-green-600'></div>
      </div>
    </div>
  );
};

export default Carousel;
