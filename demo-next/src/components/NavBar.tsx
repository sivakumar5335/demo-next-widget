import Link from 'next/link';
import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';

const NavBar: React.FC = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-50 relative'>
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href='/'> <div className='text-2xl tracking-wide'>Next</div></Link>
                <Menu></Menu>
            </div>
            {/* bigger screen */}
            <div className='hidden md:flex items-center justify-center gap-8 h-full'>
                {/* left side */}
                <div className='w-1/3 xl:w-1/3 flex items-center gap-12'>
                    <Link href='/' className='flex items-center gap-3'>
                        <Image src="/3081986.png" alt="Description" width={24} height={24} />
                        <div className='text-2xl tracking-wide'>Next</div></Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link href='/'>HomePage</Link>
                        <Link href='/'>Shop</Link>
                        <Link href='/'>Deals</Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Contact</Link>
                    </div>
                </div>
                {/* right side  */}
                <div className='w-2/3 flex items-center justify-between gap-8'>
                    <SearchBar></SearchBar>
                    <NavIcons></NavIcons>
                </div>
            </div>
        </div>
    );
};

export default NavBar;