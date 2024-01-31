import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from '../Components/Header';

const Root = () => {
    return (
        <div className='max-w-sm md:max-w-3xl lg:max-w-7xl mx-auto'>
            
                <Header></Header>
                <Outlet></Outlet>
                <ScrollRestoration></ScrollRestoration>
            
        </div>
    );
};

export default Root;