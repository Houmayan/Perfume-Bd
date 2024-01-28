import BrandNames from "./BrandNames";
import Carousel from "./Carousel";
import Notice from "./Notice";
import OurService from "./OurService";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Notice></Notice>
            <OurService></OurService>
            <BrandNames></BrandNames>
        </div>
    );
};

export default Home;