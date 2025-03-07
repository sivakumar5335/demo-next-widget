import React from 'react';
import Image from 'next/image';

const Filter: React.FC = () => {
    return (
        <div className='mt-12 flex justify-between'>
            <div className='flex gap-6 flex-wrap'>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                    <option>Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <input type="text" name="min" id="" placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
                <input type="text" name="max" id="" placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                    <option>Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                    <option>Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
                <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                    <option>Type</option>
                    <option value="Physical">Physical</option>
                    <option value="Digital">Digital</option>
                </select>
            </div>
            <div>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400'>
                    <option>Sort By</option>
                    <option value="Price">Price</option>
                    <option value="Digital">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </div>
           
        </div>
    );
};

export default Filter;