import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "../review.css"
// import { EffectCreative } from "swiper/modules";
import { MdOutlineSwipeRight } from "react-icons/md";

import client1 from "../assets/client-1-svg.svg";
import client2 from "../assets/client-2-svg.svg";
import client3 from "../assets/client-3-svg.svg";

const Review = () => {
  return (
    <div className="">
      <h1 className="font-merienda text-center text-2xl lg:text-6xl md:text-5xl mt-7 md:mt-12 lg:mt-24">Inhale Success</h1>
      <p className="font-rightous text-center text-xs md:text-sm lg:text-base mt-3">
        Rave Reviews from Our Scent-Sational Clients!
      </p>

      <div className="">
        <Swiper watchSlidesProgress={true} spaceBetween={30} className="mySwiper mt-7 w-10/12">
          <SwiperSlide className="px-7 py-5 flex flex-col">

            <h1 className="text-[#1A120B] text-center text-base ">
              আমি পারফিউম বিডি থেকে অফিসের জন্য একটি নতুন পারফিউম কিনেছি, যা আমার
              খুবই পছন্দ হয়েছে। তাদের কাস্টমার সাপোর্ট অসাধারণ - তাদের দিকে থেকে
              সব প্রশ্নের উত্তর পেয়েছি! ইনশাআল্লাহ আবারো কেনা হবে পারফিউম বিডি
              থেকে।
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client1} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Sanjida Akther</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              পারফিউম বিডি থেকে কেনাকাটার অভিজ্ঞতা খুবিই চমৎকার ছিল আমার!  আমার পছন্দের পারফিউমগুলি এখান থেকেই কিনতে পেরেছি অনেক কম দামে, এবং তারা সবসময় নতুন ব্র্যান্ড এবং আকর্ষণীয় অফার সরবরাহ করে। পারফিউম বিডি আমার শখের পারফিউম পার্টনার হয়ে উঠেছে এবং তাদের কাস্টমার সাপোর্ট সত্যিই চমৎকার!
            </h1>
            <div className="flex  justify-center items-center  gap-3 mt-5">
              <img src={client2} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Thouhidul Islam</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              আমি পারফিউম বিডি থেকে একটি নতুন পারফিউম কিনেছি এবং এর দাম ও গুণ সম্পর্কে অত্যন্ত খুশি। তাদের কাস্টমার সাপোর্ট ও ব্র্যান্ড কালেকশন অসাধারণ! প্রস্তুত আছি আরও কিছু কিনতে!
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client3} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Mohammad Ismail</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">

            <h1 className="text-[#1A120B] text-center text-base">
              আমি পারফিউম বিডি থেকে অফিসের জন্য একটি নতুন পারফিউম কিনেছি, যা আমার
              খুবই পছন্দ হয়েছে। তাদের কাস্টমার সাপোর্ট অসাধারণ - তাদের দিকে থেকে
              সব প্রশ্নের উত্তর পেয়েছি! ইনশাআল্লাহ আবারো কেনা হবে পারফিউম বিডি
              থেকে।
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client1} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Sanjida Akther</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              পারফিউম বিডি থেকে কেনাকাটার অভিজ্ঞতা খুবিই চমৎকার ছিল আমার!  আমার পছন্দের পারফিউমগুলি এখান থেকেই কিনতে পেরেছি অনেক কম দামে, এবং তারা সবসময় নতুন ব্র্যান্ড এবং আকর্ষণীয় অফার সরবরাহ করে। পারফিউম বিডি আমার শখের পারফিউম পার্টনার হয়ে উঠেছে এবং তাদের কাস্টমার সাপোর্ট সত্যিই চমৎকার!
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client2} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Thouhidul Islam</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              আমি পারফিউম বিডি থেকে একটি নতুন পারফিউম কিনেছি এবং এর দাম ও গুণ সম্পর্কে অত্যন্ত খুশি। তাদের কাস্টমার সাপোর্ট ও ব্র্যান্ড কালেকশন অসাধারণ! প্রস্তুত আছি আরও কিছু কিনতে!
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client3} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Mohammad Ismail</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col ">

            <h1 className="text-[#1A120B] text-center text-base">
              আমি পারফিউম বিডি থেকে অফিসের জন্য একটি নতুন পারফিউম কিনেছি, যা আমার
              খুবই পছন্দ হয়েছে। তাদের কাস্টমার সাপোর্ট অসাধারণ - তাদের দিকে থেকে
              সব প্রশ্নের উত্তর পেয়েছি! ইনশাআল্লাহ আবারো কেনা হবে পারফিউম বিডি
              থেকে।
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client1} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Sanjida Akther</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              পারফিউম বিডি থেকে কেনাকাটার অভিজ্ঞতা খুবিই চমৎকার ছিল আমার!  আমার পছন্দের পারফিউমগুলি এখান থেকেই কিনতে পেরেছি অনেক কম দামে, এবং তারা সবসময় নতুন ব্র্যান্ড এবং আকর্ষণীয় অফার সরবরাহ করে। পারফিউম বিডি আমার শখের পারফিউম পার্টনার হয়ে উঠেছে এবং তাদের কাস্টমার সাপোর্ট সত্যিই চমৎকার!
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client2} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Thouhidul Islam</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-7 py-5 flex flex-col">
            <h1 className="text-[#1A120B] text-center text-base">
              আমি পারফিউম বিডি থেকে একটি নতুন পারফিউম কিনেছি এবং এর দাম ও গুণ সম্পর্কে অত্যন্ত খুশি। তাদের কাস্টমার সাপোর্ট ও ব্র্যান্ড কালেকশন অসাধারণ! প্রস্তুত আছি আরও কিছু কিনতে!
            </h1>
            <div className="flex justify-center items-center  gap-3 mt-5">
              <img src={client3} alt="" />
              <div>
                <p className="font-rightous text-[12.5px] text-[#1A120B] text-nowrap">Mohammad Ismail</p>
                <div className="rating w-[65.5px] flex items-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"

                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        <MdOutlineSwipeRight className="mx-auto mt-5 hover:rotate-90 hover:ease-in hover:duration-300" size={30} />
      </div>
    </div>
  );
};

export default Review;
