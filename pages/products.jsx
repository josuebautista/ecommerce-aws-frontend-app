import CardProduct from '@/components/CardProduct';
import Header from '@/components/Header';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import React from 'react';


const products = ({ products }) => {
  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden'>
      <Header />
      <div className="flex justify-center">
        <div className='w-11/12'>
          <div className='text-3xl my-5 '>All Products</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className='w-11/12 grid grid-cols-3 grid-flow-row gap-5 '>
          {products && products.map(product => (
            <CardProduct key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default products

export const getServerSideProps = async () => {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { '_id': -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },

  }
}