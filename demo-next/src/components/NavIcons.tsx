'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CartModel from './CartModel';

const NavIcons: React.FC = () => {
    const [isProfileOpen, setIsPofileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const router = useRouter();
    const isLoggedIn = false;
    const handleProfile = () => {
        if (!isLoggedIn) {
            router.push('/');   
        }
        setIsPofileOpen((prev) => !prev);
    }
    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>
            <Image src='/profile.png' alt='' width={22} height={22} className='cursor-pointer' onClick={handleProfile}></Image>
            {isProfileOpen && (
                <div className='absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20'>
                    <Link href='/'>Profile</Link>
                    <div className='mt-2 cursor-pointer'>Logout</div>
                </div>
            )}
            <Image src='/notification.jpg' alt='' width={22} height={22} className='cursor-pointer'></Image>
            <div className='relative cursor-pointer'>
                <Image src='/3081986.png' alt='' width={22} height={22} className='cursor-pointer' onClick={() => setIsCartOpen((prev) => !prev)}></Image>
                <div className='absolute -top-4 -right-4 w-6 bg-[#F35C7A] rounded-full text-white text-sm flex items-center justify-center'>1</div>
            </div>
            {isCartOpen && (
                <CartModel />
            )}

        </div>
    );
};

export default NavIcons;