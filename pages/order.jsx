import Header from '@/components/Header'
import { useGlobalContext } from '@/utils/Context';
import Link from 'next/link';
import React, { useEffect } from 'react'

const Order = () => {
  const { resetValues } = useGlobalContext();

  useEffect(() => {
      resetValues();
  }, [])
  
  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden overflow-y-auto'>
      <Header />
      <div className='w-full h-full grid place-content-center overflow-x-hidden overflow-y-hidden'>
        <div className='w-full bg-white p-5 rounded-xl mx-5'>
          <div className='text-center text-2xl'>Payment Success</div>
          <div className='flex justify-center mt-5'>
            <Link href={'/'} className='bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 hover:translate-y-1 transition duration-200 text-white py-2 px-4 rounded-lg'>
              Keep Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Order