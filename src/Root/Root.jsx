import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='max-w-md md:max-w-3xl lg:max-w-7xl mx-auto'>
            
                <Header></Header>
                <Outlet></Outlet>
                <ScrollRestoration></ScrollRestoration>
                <Footer></Footer>
        </div>
    );
};

export default Root;