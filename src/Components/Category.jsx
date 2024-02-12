import man from "../assets/men.svg";
import woman from "../assets/women.svg";
const Category = () => {
  return (
    <div className="mt-44">
      <div className="brands-name text-center">
        <h1 className="font-merienda text-2xl lg:text-6xl md:text-5xl">Scented Elegance for All</h1>
        <p className="font-rightous mt-3 text-xs md:text-sm lg:text-base">
          Unveil Irresistible Fragrances for Men and Women!
        </p>
      </div>
      {/* category section */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-5 justify-center items-center mt-12 px-12">
        {/* for man */}
        <div>
          <img src={man} alt="" />
        </div>
        {/* for woman */}
        <div>
          <img src={woman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
