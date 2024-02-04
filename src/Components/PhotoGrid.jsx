import React from 'react';
import album from "../assets/perfume/img_container.svg";
const PhotoGrid = () => {
    return (
        <div className='w-full flex justify-center mt-24'>
            <img className='object-contain' src={album} alt="" />
        </div>
    );
};

export default PhotoGrid;