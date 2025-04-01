'use client'
import React from 'react';


const Add: React.FC = () => {
    const [quantity, setQuantity] = React.useState(1);
    const stock = 4;
    const handleOnClick = (type:"d"|"i") => {
        if (type === "d" && quantity > 1) {
            setQuantity(prev => prev - 1);
        } else if (type === "i" && quantity < stock) {
            setQuantity((prev)=> prev + 1);
        }
    }
    return (
        <div className='flex flex-col gap-4'>
            <h4 className='font-medium '>Choose a quantity</h4>
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'> 
                    <div className='bg-gray-100 py-4 px-4 rounded-3xl flex justify-between items-center w-32'>
                        <button className='cursor-pointer text-xl' onClick={()=>handleOnClick("d")}>-</button>
                        {quantity}
                        <button className='cursor-pointer text-xl'  onClick={()=>handleOnClick("i")}>+</button>
                    </div>
                    <div className='text-xs'>Only <span className='text-orange-500'>4 item's</span>  left <br />Don't miss it.</div>
                </div>
                <button className='w-36 text-sm rounded-3xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Add;