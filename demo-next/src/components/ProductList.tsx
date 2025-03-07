import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ProductList: React.FC = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-center flex-wrap'>
            <Link href='/list' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/summer.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'></Image>
                    <Image src='/winter.jpg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'></Image>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl  ring-1 ring-[#F35C7A] w-max text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] hover:text-white'>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/summer.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'></Image>
                    <Image src='/winter.jpg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'></Image>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl  ring-1 ring-[#F35C7A] w-max text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] hover:text-white'>Add to Cart</button>
            </Link>
            <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                    <Image src='/summer.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'></Image>
                    <Image src='/winter.jpg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md'></Image>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500'>My description</div>
                <button className='rounded-2xl  ring-1 ring-[#F35C7A] w-max text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] hover:text-white'>Add to Cart</button>
            </Link>

        </div>
    );
};

export default ProductList;