import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-50 bg-gray-100 text-sm mt-24'>
            {/* top */}
            <div className='flex flex-col md:flex-row justify-between gap-24'>
                {/* left */}
                <div className='w-full lg:w-1/4 md:w-1/2  flex flex-col gap-8'>
                    <Link href='/'>
                        <div className='text-2xl tracking-wide'>Next</div>
                    </Link>
                    <p>179, North Car Street , near saravana bavan , srivilliputhur - 626125</p>
                    <span className='font-semibold'>nextOnlineShop@gmail.com</span>
                    <span className='font-semibold'>+91 96 988 9887 00</span>
                    <div className='flex gap-6'>
                        <Image src='/facebook.png' alt='' width={16} height={16}></Image>
                        <Image src='/insta.png' alt='' width={16} height={16}></Image>
                        <Image src='/youtube.png' alt='' width={16} height={16}></Image>
                        <Image src='/x.webp' alt='' width={16} height={16}></Image>

                    </div>
                </div>
                {/* middle */}
                <div className='w-1/2 hidden lg:flex justify-between'>
                    <div className='flex flex-col gap-6 justify-between'>
                        <h1 className='font-medium tex-lg'>COMPANY</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href='/'>Career</Link>
                            <Link href='/'>About Us</Link>
                            <Link href='/'>Affiliates</Link>
                            <Link href='/'>Contact Us</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 justify-between'>
                        <h1 className='font-medium tex-lg'>SHOP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href='/'>New Arrivals</Link>
                            <Link href='/'>Gadgets</Link>
                            <Link href='/'>Men</Link>
                            <Link href='/'>Women</Link>
                            <Link href='/'>All Items</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 justify-between'>
                        <h1 className='font-medium tex-lg'>HELP</h1>
                        <div className='flex flex-col gap-6'>
                            <Link href='/'>Customer service</Link>
                            <Link href='/'>My Account</Link>
                            <Link href='/'>Find a store</Link>
                            <Link href='/'>Gift Coopens</Link>
                            <Link href='/'>Legel & Privacy</Link>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='w-full lg:w-1/4 md:w-1/2  flex flex-col gap-8'>
                    <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
                    <p >Discover the joy of exclusive offers and updates. Subscribe now and never miss a beat!</p>
                    <div className='flex'>
                        <input type="text" placeholder='Email Address' className='p-4 w-3/4' />
                        <button className='w-1/4 bg-[#F35C7A] text-white'>JOIN</button>
                    </div>
                    <div className='flex justify-between'>
                        <span className='font-semibold'>Secure Payments</span>
                        <Image src='/visa.webp' alt='' width={40} height={20}></Image>
                        <Image src='/master.png' alt='' width={40} height={20}></Image>
                        <Image src='/rupay.png' alt='' width={40} height={20}></Image>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
                <div>@20235 Next Store</div>
                <div className='flex flex-col md:flex-row gap-8'>
                    <div className=''> 
                        <span className='text-gray-500 mr-4'>Language</span>
                        <span className='font-medium'>India | English</span>
                    </div>
                    <div>
                        <span className='text-gray-500 mr-4'>Currency</span>
                        <span className='font-medium'>₹ Rupee</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;