import React from 'react';
import aboutImg from "../assets/about-logo.svg";
const About = () => {
    return (
        <div className='bg-[#f8f1e9] text-center mt-44 rounded-md'>
            <img className='mx-auto pt-12' src={aboutImg} alt="" />
            <h1>Scented Elegance Redefined: Dive into Perfume BD's World of Exquisite Fragrances!</h1>
            <p>Perfume BD is a highly popular perfume retailer in Bangladesh, offering an extensive and diverse collection that has captured the hearts of customers far and wide. With a commitment to providing unparalleled choices, Perfume BD invites you to experience each creation, promising a unique journey from every bottle. Elevate your senses and create a signature fragrance sanctuary at Perfume BD, where luxury meets individuality.</p>
            <div>
                <button className='btn bg-[#876445] text-[#fffcf6]'>About Us</button>
                <button className='btn bg-[#876445] text-[#fffcf6]'>Contact Us</button>
                <button className='btn bg-[#876445] text-[#fffcf6]'>Shop</button>
            </div>
        </div>
    );
};

export default About;