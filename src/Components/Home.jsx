import BrandNames from "./BrandNames";
import Carousel from "./Carousel";
import Category from "./Category";
import Notice from "./Notice";
import OurService from "./OurService";
import PerfumeCard from "./PerfumeCard";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Notice></Notice>
            <OurService></OurService>
            <BrandNames></BrandNames>
            <PerfumeCard></PerfumeCard>
            <Category></Category>
        </div>
    );
};

export default Home;