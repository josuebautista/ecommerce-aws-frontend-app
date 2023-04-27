import React from 'react';
import Header from '@/components/Header';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import CategoryC from '@/components/Category';


const Categories = ({ products }) => {

  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden'>
      <Header />
      {products.length > 0 && (
        <CategoryC products={products} />

      )}
    </main>
  )
}

export default Categories

export const getServerSideProps = async () => {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { '_id': -1 } });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },

  }
}