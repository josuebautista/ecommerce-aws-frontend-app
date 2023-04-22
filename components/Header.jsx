import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div className='w-full flex justify-center bg-[#222]'>
      <div className='w-11/12 text-white py-6'>
        <div className="flex justify-between">
          <div href={'/'} className='text-xl'>Ecommerce</div>
          <nav className='text-slate-50/75 flex gap-4'>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/'}>Home</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/products'}>All products</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/categories'}>Categories</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/account'}>Account</Link>
            <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/cart'}>Cart (0)</Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
