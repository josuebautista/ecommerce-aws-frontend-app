import { useGlobalContext } from '@/utils/Context';
import Image from 'next/image';
import React, { useEffect } from 'react'

const RowProduct = ({ product }) => {
  const { cartProducts, addItemProduct, removeItemProduct, getTotalPrice } = useGlobalContext();
  useEffect(() => {
    getTotalPrice();
  }, []);

  return (
    <tr className='border-t'>
      <td className='flex items-center gap-4'>
        <div className='flex h-20 w-auto border rounded-xl my-1'>
          <Image src={product.images[0]} alt={product.title} width={100} height={100} className='object-contain py-2' priority />
        </div>
        <div className='h-full flex items-center'>
          {product.title}
        </div>
      </td>
      <td>
        <div className='w-full h-full flex justify-center gap-2 font-bold text-xl'>
          <button onClick={() => removeItemProduct(product._id)} className='bg-slate-700 hover:bg-slate-500 active:bg-slate-400 transition duration-200 w-1/3 rounded text-white'>-</button>
          <div>{cartProducts.filter(id => id === product._id).length}</div>
          <button onClick={() => addItemProduct(product._id)} className='bg-slate-700 hover:bg-slate-500 active:bg-slate-400 transition duration-200 w-1/3 rounded text-white'>+</button>
        </div>
      </td>
      <td className='text-center'>
        ${product.price * cartProducts.filter(id => id === product._id).length}
      </td>
    </tr>
  )
}

export default RowProduct;