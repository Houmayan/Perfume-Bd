import leftArrow from "../assets/left-arrow-icon.svg";
import rightArrow from "../assets/right-arrow-icon.svg";
const Carousel = () => {
  return (
    <div className="flex  mt-3 gap-3">
      <div className="carousel rounded-[8px] w-full ">
        <div id="slide1" className="carousel-item  relative w-full ">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="object-cover"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn  border-none bg-transparent hover:bg-transparent">
              <img className="bg-transparent" src={leftArrow} alt="" />
            </a>
            <a href="#slide2" className="btn  border-none bg-transparent hover:bg-transparent">
              <img className="bg-transparent" src={rightArrow} alt="" />
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="bg-transparent" src={leftArrow} alt="" />
            </a>
            <a href="#slide3" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="bg-transparent" src={rightArrow} alt="" />
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="bg-transparent" src={leftArrow} alt="" />
            </a>
            <a href="#slide4" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="bg-transparent" src={rightArrow} alt="" />
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="" src={leftArrow} alt="" />
            </a>
            <a href="#slide1" className="btn  border-none bg-transparent hover:bg-transparent">
            <img className="" src={rightArrow} alt="" />
            </a>
          </div>
        </div>
      </div>
      {/* Card */}
      <div className="flex flex-col">
        <div className="card flex-row w-96 bg-base-100 shadow-xl flex-1">
          <figure>
            <img className="object-cover"
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="flex-0">
          <h1>Free shipping</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Carousel;
