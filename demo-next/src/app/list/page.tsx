
import React from 'react';
import Image from 'next/image';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';

const ListPage: React.FC = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-50 relative'>
            {/* campaign */}
            <div className='hidden  bg-pink-50 px-4 sm:flex justify-between h-64'>
                <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
                    <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab the offer ,<br /> limitted for only 5 days!</h1>
                    <button className='rounded-3xl bg-[#F35C7A] text-white w-max py-3 px-5 text-sm'>BUY NOW</button>
                </div>
                <div className='relative w-1/3'>
                    <Image src='/men.webp' alt='' fill className='object-contain'></Image>
                </div>
            </div>
            {/* <Filter></Filter> */}
            <Filter></Filter>
            {/* product list */}
            <h1 className='mt-12 text-xl font-semibold'>Product You Choose</h1>
            <ProductList></ProductList>
        </div>
    );
};

export default ListPage;