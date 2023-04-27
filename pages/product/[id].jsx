import Header from '@/components/Header'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import { useGlobalContext } from '@/utils/Context'
import Image from 'next/image'
import React from 'react'
import { HiShoppingCart } from 'react-icons/hi2'

const ProductPage = ({ product }) => {
  const { addProductToCart } = useGlobalContext();
  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden'>
      <Header />
      <div className="flex justify-center h-full mt-5">
        <div className="w-11/12 h-full">
          <div className="flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col gap-10 h-full ">
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full">
              <Image src={product.images[0]} alt={product.title} width={1000} height={1000} className='w-full bg-white rounded-xl' />
              <div className='w-full flex gap-1 mt-4'>
                {product.images.map((picture, index) => (
                  <div key={index} className='h-20 flex flex-wrap bg-white rounded-lg p-1'>
                    <Image src={picture} alt={product.title + index} width={300} height={300} className='object-contain' />
                  </div>
                ))}
              </div>
            </div>
            <div className="xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full w-full">
              <h1 className='font-semibold text-3xl my-5'>{product.title}</h1>
              <div className='text-lg my-5'>
                {product.description}
              </div>
              <div className='my-5 w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-between text-center'>
                <div className='font-semibold text-3xl text-slate-500 py-4'>${product.price}</div>
                <div className='text-white text-center  flex justify-center my-2'>
                  <button type='button' onClick={() => addProductToCart(product._id)} className='border border-indigo-700 rounded-md py-4 px-4 bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 hover:translate-y-1 transition duration-200 flex justify-center'>
                    <HiShoppingCart size={20} className='mr-1' />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductPage;

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  await mongooseConnect();
  const product = await Product.findById(id)
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}