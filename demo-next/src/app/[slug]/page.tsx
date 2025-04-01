import ProductImages from '@/components/ProductImages';
import React from 'react';
import CustomizeProducts from '@/components/CustomizeProducts';
import Add from '@/components/Add';

const SinglePage: React.FC = () => {
    return (
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-50 relative flex flex-col lg:flex-row gap-16'>
            {/* img */}
            <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
                <ProductImages></ProductImages>
            </div>
            {/* text */}
            <div className='w-full lg:w-1/2 flex flex-col gap-6'>
                <h1 className='text-4xl font-medium'>Product Name</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto nam, harum quasi accusamus asperiores modi ipsam quidem, laboriosam placeat porro, totam minus dolore veniam quod?
                    Inventore voluptatum repudiandae amet quo.
                </p>
                <div className='h-[2px] bg-gray-100' />
                <div className='flex items-center gap-4'>
                    <h3 className='text-xl text-gray-500 line-through'>₹35</h3>
                    <h2 className='font-medium text-2xl'>₹20 </h2>
                </div>

                <div className='h-[2px] bg-gray-100' />
                <CustomizeProducts></CustomizeProducts>
                <Add></Add>
                <div className='h-[2px] bg-gray-100' />
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus, similique reiciendis expedita vitae alias at quis molestias quos, iste laboriosam nam.
                         Blanditiis accusantium asperiores totam vero autem consequuntur quos labore.
                    </p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus, similique reiciendis expedita vitae alias at quis molestias quos, iste laboriosam nam.
                         Blanditiis accusantium asperiores totam vero autem consequuntur quos labore.
                    </p>
                </div>
                <div className='text-sm'>
                    <h4 className='font-medium mb-4'>Title</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Delectus, similique reiciendis expedita vitae alias at quis molestias quos, iste laboriosam nam.
                         Blanditiis accusantium asperiores totam vero autem consequuntur quos labore.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;