import { FaBangladeshiTakaSign } from "react-icons/fa6";
const PerfumeDetails = ({ detail }) => {
  return (
    <div className="card bg-[#efe2d2] p-4 w-[300px] h-[450px]  shadow-xl">
      
        {detail.image2 ? <figure className="flex gap-2 bg-white w-full h-[250px]"><img
          src={detail.image1}
          alt="Shoes"
          className="object-contain w-[150px] h-full"
        />
        {/* singlwe image w and h full */}
        {/* {detail.image2 ? } */}
        <img
          src={detail.image2}
          alt="Shoes"
          className="object-contain w-[150px] h-full "
        /></figure> : <figure className="flex gap-2 bg-white w-full h-[250px]"> <img
        src={detail.image1}
        alt="Shoes"
        className="object-contain w-full h-full"
      /></figure>}
        
      
      <div className=" space-y-2 mt-2">
        <h2 className="card-title font-rightous font-normal">
          Bleu De Chanel
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="font-roboto  text-[#1A120]">Variant: Indian</p>
        <p className="font-roboto text-[#1A120]">Type: Oil</p>
        <p className="font-roboto text-[#1A120]">Volume: 30ml</p>

        {/* div for pricing */}
        <div className="flex gap-3 font-rightous">
          <h1 className="flex items-center">
            1200 <FaBangladeshiTakaSign />
          </h1>
          <h1 className="flex items-center">
            {" "}
            <strike>1500</strike> <FaBangladeshiTakaSign />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetails;
