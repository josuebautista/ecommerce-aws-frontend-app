import React from 'react'
import Image from 'next/image';
import { HiShoppingCart } from "react-icons/hi2";
import { useGlobalContext } from '@/utils/Context';

const CardProduct = ({ product }) => {
  const { addProductToCart } = useGlobalContext();
  return (
    <div>
      <div className='p-3 bg-white rounded-xl'>
        <div className="h-44 flex justify-center">
          <Image width={400} height={400} src={product.images[0]} alt={product.title} className='object-contain' priority />
        </div>
      </div>
      <div className="flex flex-col py-1 w-full ">
        <div className="div">{product.title}</div>
        <div className="flex flex-row justify-between py-1">
          <div className="font-bold text-2xl">
            ${product.price}
          </div>
          <div className='w-1/3 hover:w-5/12 '>
            <button type='button' onClick={() => addProductToCart(product._id)} className='bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 transition duration-200 text-white rounded-lg w-full flex justify-center py-2'>
              <HiShoppingCart size={20} className='mr-1' />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct