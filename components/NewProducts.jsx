import React from 'react'
import CardProduct from './CardProduct';

const NewProducts = ({ products }) => {

  return (
    <div className='w-full overflow-x-hidden my-4 flex justify-center bg-slate-100'>
      <div className="container py-4">
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-col-2 grid-cols-2 grid-flow-row gap-5 px-5'>
          {products.map(product => (
            <CardProduct key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts