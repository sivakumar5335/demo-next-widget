import ProductImages from '@/components/ProductImages';
import React from 'react';

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
            </div>
        </div>
    );
};

export default SinglePage;