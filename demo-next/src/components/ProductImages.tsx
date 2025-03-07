'use client'
import React from 'react';
import Image from 'next/image';
const images = [
    {
        id:1,
        url:'/samsung.jpeg'
    },
    {
        id:2,
        url:'/back-samsung.jpg'
    },
    {
        id:3,
        url:'/front-samsung.webp'
    }
]

const ProductImages: React.FC = () => {
    const [index , setIndex] = React.useState(0);
    return (
        <div className=''> 
            <div className='h-[500px] relative'>
                <Image src={images[index].url} alt='' fill sizes='50vw' className='object-cover rounded-md'></Image>
            </div>
            <div className='flex justify-between mt-8 gap-4'>
               {images.map((image,i) => (
                <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' key={image.id} onClick={()=>setIndex(i)}>
                <Image src={image.url} alt='' fill sizes='30vw' className='object-cover rounded-md'></Image>
            </div>
               ))}
            </div>
        </div>
    );
};

export default ProductImages;