import About from "./About";
import BrandNames from "./BrandNames";
import Carousel from "./Carousel";
import Category from "./Category";
import Notice from "./Notice";
import OurService from "./OurService";
import PerfumeCard from "./PerfumeCard";
import PhotoGrid from "./PhotoGrid";
import Quotes from "./Quotes";
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
            <PhotoGrid></PhotoGrid>
            <Quotes></Quotes>
        </div>
    );
};

export default Home;