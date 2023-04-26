import { useGlobalContext } from '@/utils/Context';
import Link from 'next/link';
import React from 'react';
import { HiListBullet } from 'react-icons/hi2';

const Header = () => {
  const { cartProducts } = useGlobalContext();

  return (
    <div className='w-full flex justify-center bg-[#222]'>
      <div className='w-11/12 text-white py-6'>
        <div className="flex justify-between">
          <Link href={'/'} className='text-xl hover:text-slate-300 transition duration-200'>Ecommerce</Link>
          <nav className='text-slate-50/75 flex gap-4'>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/'}>Home</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/products'}>All products</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/categories'}>Categories</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/account'}>Account</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/cart'}>Cart ({cartProducts !== null ? cartProducts.length : '0'})</Link>
          </nav>
          <button className='xl:hidden lg:hidden md:hidden text-white hover:text-slate-300'>
            <HiListBullet size={35} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
