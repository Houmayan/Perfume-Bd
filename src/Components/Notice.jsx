import Marquee from "react-fast-marquee";

const Notice = () => {
    return (
        <div className='mt-10'>
            <Marquee className='py-4 bg-[#efe2d2] rounded-[8px]'>

            <h1>🔴Our website is currently undergoing construction, and as a result, some features may not be functional at the moment. We appreciate your understanding and apologize for any inconvenience this may cause.</h1>
            </Marquee>
        </div>
    );
};

export default Notice;