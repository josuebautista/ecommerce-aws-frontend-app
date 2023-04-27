
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardProduct from './CardProduct';

const CategoryC = ({ products }) => {
  const [categories, setCategories] = useState(null);
  const [categoryId, setCategoryId] = useState('');
  const [productFilter, setProductFilter] = useState([]);

  const fetchCategories = async () => {
    await axios.get('api/categories').then(result => {
      setCategories(result.data);
    })
  }

  useEffect(() => {
    fetchCategories();
  }, [])

  useEffect(() => {
    setProductFilter(products.filter(product => product.category === categoryId ));
  }, [categoryId, products])

  return (
    <div className='w-full h-screen'>
      <div className='w-full bg-slate-200 py-6 flex justify-center'>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className='xl:w-1/3 lg:w-1/3 md:w-2/3 sm:w-11/12 w-11/12 py-2 px-5 rounded-xl'>
          <option value=''>All Products</option>
          {categories !== null && categories.map(category => category.name !== 'mobiles' && (
            <option value={category._id} key={category._id}>{category.name}</option>
          ))}
        </select>
      </div>
      <div className='flex justify-center '>
        <div className='w-11/12'>
          {categoryId === '' ? (
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-col-2 grid-cols-2 grid-flow-row gap-5 px-5'>
              {products.map(product => (
                <CardProduct key={product._id} product={product} />
              ))}
            </div>
          ) : (
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-col-2 grid-cols-2 grid-flow-row gap-5 px-5'>
              {productFilter.length > 0 &&  productFilter.map(product => (
                <CardProduct key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategoryC