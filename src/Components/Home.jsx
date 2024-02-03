import About from "./About";
import BrandNames from "./BrandNames";
import Carousel from "./Carousel";
import Category from "./Category";
import Notice from "./Notice";
import OurService from "./OurService";
import PerfumeCard from "./PerfumeCard";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Notice></Notice>
            <OurService></OurService>
            <BrandNames></BrandNames>
            <PerfumeCard></PerfumeCard>
            <Category></Category>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;