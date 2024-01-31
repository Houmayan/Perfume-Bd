import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { GiArmoredBoomerang } from "react-icons/gi";
import pb from "../assets/perfume/pb-product.svg";
import blu from "../assets/perfume/bleu-de-chanel-img.svg";
import coolLady from "../assets/perfume/cool-lady-img.svg";
import armani from "../assets/perfume/emporio-armani-img.svg";
import gucci from "../assets/perfume/gucci-guilty-img.svg";
import invictus from "../assets/perfume/invictus-img.svg";
import lady from "../assets/perfume/lady-million-img.svg";
import PerfumeDetails from "./PerfumeDetails";
import { useState } from "react";

const perfumeDetais = [

  {
    id: 1,
    image1: pb,
    image2: blu,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 2,
    image1: pb,
    // "image2" : coolLady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 3,
    image1: blu,
    image2: blu,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 4,
    image1: pb,
    image2: armani,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 5,
    image1: pb,
    image2: gucci,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 6,
    image1: armani,
    image2: blu,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 7,
    image1: pb,
    image2: invictus,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 8,
    image1: pb,
    image2: lady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 9,
    image1: pb,
    image2: lady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 10,
    image1: pb,
    image2: lady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 11,
    image1: pb,
    image2: lady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
  {
    id: 12,
    image1: pb,
    image2: lady,
    name: "Bleu De Chanel",
    variant: "indian",
    type: "oil",
    volumes: "30 ML",
    NewPrice: 1200,
    oldPrice: 1500,
  },
];


const PerfumeCard = () => {
  const [load,setLoad] = useState(8);
  
  const handleLoadMore =()=>{
    setLoad(perfumeDetais.length)
  console.log('button working',load);
  }
  return (
    <div className="mt-24 ">
      <div className="brands-name text-center">
        <h1 className="font-merienda text-6xl">Fragrance Frenzy</h1>
        <p className="font-rightous mt-3">
          Discover the Aroma Sensation with Our Most Popular Perfumes!
        </p>
      </div>
      {/* perfume card */}

      {/* try */}
      <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2 lg:gap-5 mt-12">
        {perfumeDetais.slice(0,load).map((detail) => (
          <PerfumeDetails key={detail.id} detail={detail}></PerfumeDetails>
        ))}
      </div>
      <button onClick={handleLoadMore} className={`btn bg-[#d5cea3] font-rightous mt-12 ${load===8 ? 'visible':'hidden'}`}>Load More <GiArmoredBoomerang size={20}/></button>
    </div>
  );
};

export default PerfumeCard;
