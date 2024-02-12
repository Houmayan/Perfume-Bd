import { FaAnglesRight } from "react-icons/fa6";
const Quotes = () => {

    const importantQuoutes = [
        {
            id:1,
            title: 'The Aromatic Symphony: Unveiling the Art of Perfumery',
            author:'By Towfique Elahe',
            date: 'Jan 2, 2024',
            content: 'Explore the enchanting world of perfumes, from the science of blending notes to the emotional resonance of each fragrance. Join us on a fragrant journey as we delve into the artistry behind your favorite scents.'
        },
        {
            id:2,
            title: 'Signature Scents: Choosing the Perfect Perfume for Every Occasion',
            author:'By Towfique Elahe',
            date: 'Jan 2, 2024',
            content: 'Discover the secrets to finding the ideal perfume for different moments in your life. From everyday elegance to special occasions, this guide will help you curate a fragrance wardrobe that complements your style.'
        },
        {
            id:3,
            title: 'Scent and Sensibility: The Psychology of Fragrance',
            author:'By Towfique Elahe',
            date: 'Jan 2, 2024',
            content: 'Delve into the psychological impact of scents on mood and emotions. Learn how different fragrance notes can evoke memories, enhance moods, and contribute to an overall sense of well-being.'
        }
    ]

    return (
        <div className="text-center hidden sm:flex sm:flex-col  sm:items-center md:visible lg:visible mt-24">
            <h1 className="font-merienda text-6xl">Whiff of Wisdom</h1>
            <p className="font-rightous mt-3">Dive into Our Captivating Perfume Blogs for Fragrance Enthusiasts!</p>

            {/* div for cards */}
            <div className="mt-12 flex text-left  gap-7 px-20">{/* main div */}
               
            {
                importantQuoutes.map(data=><div key={data.id} className="p-5 flex flex-col justify-between bg-[#efe2d2] rounded-[10px] ">
                        <h1 className="font-roboto text-xl text-wrap">{data.title}</h1>
                    <div>
                    <p className="mt-4 font-rightous">{data.author} | On {data.date}</p>
                    <hr />
                    <p className="mt-4 text-wrap font-roboto">{data.content}</p>
                    <button className="btn mt-4 font-rightous bg-[#876445] text-[#FFFCF6]">Read More</button>
                    </div>
                </div>)
            }
            </div>
            <button className="btn  bg-[#d5cea3] rounded-[5px] mt-12 font-rightous">More Posts <FaAnglesRight /></button>
        </div>
    );
};

export default Quotes;