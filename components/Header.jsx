import { useGlobalContext } from '@/utils/Context';
import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import { HiListBullet, HiXMark } from 'react-icons/hi2';
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const { cartProducts } = useGlobalContext();
  const { data: session } = useSession();
  const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleLogin = () => {
    setShowNav(false);
    signIn()
  }
  return (
    <div className='w-full flex justify-center bg-[#222]'>
      <div className='w-11/12 text-white py-6'>
        <div className="flex justify-between">
          {windowSize.width && windowSize.width > 450 ? (
            <>
              <Link href={'/'} className='text-xl hover:text-slate-300 transition duration-200'>Ecommerce</Link>
              <nav className='text-slate-50/75 flex gap-4'>
                <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/'}>Home</Link>
                <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/products'}>All products</Link>
                <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/categories'}>Categories</Link>
                { session ? (
                  <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/account'}>Account</Link>
                ) : (
                  <button onClick={() => handleLogin()} className='hover:text-white active:text-sky-300/80 transition duration-200 pb-1' href={'/'}>Sign in</button>
                )}
                <Link className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/cart'}>Cart ({cartProducts !== null ? cartProducts.length : '0'})</Link>
              </nav>
            </>
          ) : (
            <>
              <Link href={'/'} className='text-xl hover:text-slate-300 transition duration-200'>Ecommerce</Link>
              <button type='button' onClick={() => setShowNav(true)} className='xl:hidden lg:hidden md:hidden text-white hover:text-slate-300'>
                <HiListBullet size={35} />
              </button>
            </>
          )}
        </div>
      </div>
      {showNav && (
        <>
          <div className='absolute z-10 w-2/3 right-0 h-screen bg-[#222] border'>
            <nav className='text-slate-50/75 flex flex-col my-5 gap-4'>
              <button type='button' onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200 p-5 text-2xl flex'>
                <HiXMark size={32} className='mr-2' />Close
              </button>
              <Link onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200 p-5 text-2xl' href={'/'}>Home</Link>
              <Link onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200 p-5 text-2xl' href={'/products'}>All products</Link>
              <Link onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200 p-5 text-2xl' href={'/categories'}>Categories</Link>
              { session ? (
                  <Link onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200' href={'/'}>Account</Link>
                ) : (
                  <button onClick={() => handleLogin()} className='hover:text-white active:text-sky-300/80 transition duration-200 pb-1 text-2xl' href={'/'}>Sign in</button>
                )}
              <Link onClick={() => setShowNav(false)} className='hover:text-white active:text-sky-300/80 transition duration-200 p-5 text-2xl' href={'/cart'}>Cart ({cartProducts !== null ? cartProducts.length : '0'})</Link>
            </nav>
          </div>
          <div className='absolute z-10 w-1/3 left-0 h-screen bg-[rgba(34,34,34,0.5)] '>
            <button onClick={() => setShowNav(false)} className='w-full h-full'>

            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Header
