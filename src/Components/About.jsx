import aboutImg from "../assets/about-logo.svg";
const About = () => {
    return (
        <div className='bg-[#f8f1e9] text-center mt-44  rounded-md px-12'>
            <img className='mx-auto pt-12' src={aboutImg} alt="" />
            <h1 className="mt-12 font-rightous text-3xl">Scented Elegance Redefined: Dive into Perfume BD's World of Exquisite Fragrances!</h1>
            <p className="font-roboto mt-5">Perfume BD is a highly popular perfume retailer in Bangladesh, offering an extensive and diverse collection that has captured the hearts of customers far and wide. With a commitment to providing unparalleled choices, Perfume BD invites you to experience each creation, promising a unique journey from every bottle. Elevate your senses and create a signature fragrance sanctuary at Perfume BD, where luxury meets individuality.</p>
            <div className="mt-12 flex gap-3 justify-center pb-12">
                <button className='btn bg-[#876445] text-[#fffcf6] font-rightous'>About Us</button>
                <button className='btn bg-[#876445] text-[#fffcf6] font-rightous'>Contact Us</button>
                <button className='btn bg-[#876445] text-[#fffcf6] font-rightous'>Shop</button>
            </div>
        </div>
    );
};

export default About;