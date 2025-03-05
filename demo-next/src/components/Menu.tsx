'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Menu: React.FC = () => {
    const [open , setOpen] = useState(false);
    return (
        <div>
            <Image src='/menu.jpg' alt={''} width={28} height={28} className='curser-pointer' onClick={()=>setOpen((prev)=>!prev)}></Image>
            {open &&(
                <div className='absolute bg-black text-white left-0 top-20 w-full  h-[clac(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10'>
                    <Link href='/'>HomePage</Link>
                    <Link href='/'>Shop</Link>
                    <Link href='/'>Deals</Link>
                    <Link href='/'>About Us</Link>
                    <Link href='/'>Contact Us</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;