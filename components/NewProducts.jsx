import React from 'react'
import Image from 'next/image';
const NewProducts = ({products}) => {
  console.log(products);
  return (
    <div className='w-full overflow-x-hidden'>
      <div className='grid grid-cols-3 grid-flow-row gap-5 overflow-x-hidden'>
        { products.map(product => (
          <div key={product._id} className='p-3'>
            <Image width={200} height={200} src={product.images[0]}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewProducts