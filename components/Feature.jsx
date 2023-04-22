import React from 'react';
import feature from '../public/feature.png'
import Image from 'next/image';
import { useRouter } from 'next/router';

const Feature = ({product}) => {
  const route = useRouter();

  const handleReadMoreLink = () => {
    route.push('/product/' + product._id)
  }

  const handleAddToCartLink = () => {
    router.push('/')
  }
  return (
    <div className='w-full flex justify-center bg-[#222] '>
    <div className='w-10/12 mb-5'>
        <div className="flex justify-center gap-1">
          <div className="w-5/12 grid place-content-center gap-2">
            <h1 className='text-5xl text-white my-2'>{product.title}</h1>
            <p className='text-white/75'>
              {product.description}
            </p>
            <div className="flex gap-2 text-white my-2">
              <button type='button' onClick={() => handleReadMoreLink()} className='border rounded-md py-2 px-4 hover:bg-[#333] hover:translate-y-1 active:bg-[#444] transition duration-200'>
                Read More
              </button>
              <button type='button' onClick={() => handleAddToCartLink()} className='border border-indigo-700 rounded-md py-2 px-4 bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 hover:translate-y-1 transition duration-200 '>
                Add to Cart
              </button>
            </div>
          </div>
          <div className='w-7/12 '>
            <Image src={feature} alt='feature' className='w-full' priority/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Feature