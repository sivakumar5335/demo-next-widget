'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SearchBar: React.FC = () => {
    const router = useRouter();
    const handleSearch = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        if(name){
            router.push(`list?name=${name}`);
        }
        
    }
    return (
        <form className='flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
            <input type="text" name='name' placeholder='search' className='flex-1 bg-transparent outline-none'  />
            <button>
                <Image src="/searchImg.jpg" alt="search icon" width={25} height={25 } />
            </button>

        </form >
    );
};

export default SearchBar;