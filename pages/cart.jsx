import { useGlobalContext } from '@/utils/Context';
import Header from '@/components/Header';
import React, { useEffect } from 'react';
import RowProduct from '@/components/RowProduct';
import { useRouter } from 'next/router';

const Cart = () => {
  const router = useRouter();
  const { products, cartProducts, totalPrice, name, setName, email, setEmail, city, setCity, postalCode, setPostalCode, streetAddress, setStreetAddress, country, setCountry } = useGlobalContext();

  const handleHome = () => {
    router.push('/');
  }

  const goToPayment = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/checkout', {
      name, email, city, postalCode, streetAddress, country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }
  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden overflow-y-auto'>
      <Header />
      {cartProducts?.length > 0 ? (
        <div className='flex justify-center'>
          <div className="w-11/12 flex flex-row gap-4 py-4">
            <div className="w-2/3 h-full rounded-xl bg-white py-5 px-4">
              <div className='font-bold text-3xl'>
                Cart
              </div>
              <div className='w-full'>
                <table className='table-auto w-full '>
                  <thead>
                    <tr className='font-bold text-xl text-center'>
                      <td className='py-4'>Product Name</td>
                      <td className='py-4'>Quantity</td>
                      <td className='py-4'>Price</td>
                    </tr>
                  </thead>
                  <tbody>
                    {products !== null && products.map(product => (
                      <RowProduct key={product._id} product={product} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className='w-full border-t flex flex-row justify-between py-4'>
                <div className='text-xl font-semibold px-4'>Total</div>
                <div className='text-xl font-semibold px-4'>${totalPrice}</div>
              </div>
            </div>
            <div className="w-1/3 h-full rounded-xl bg-white py-5 px-4">
              <div className='font-bold text-center pb-4'>
                Order Information
              </div>
              <form className='w-full' action='/api/checkout' method='POST'>
                <div className='w-full my-2 py-2'>
                  <input type='text' value={name} name='name' onChange={e => setName(e.target.value)} className='w-full py-2 px-4 border rounded-lg my-1 ' placeholder='Name' />
                  <input type='email' value={email} name='email' onChange={e => setEmail(e.target.value)} className='w-full py-2 px-4 border rounded-lg my-1 ' placeholder='Email' />
                  <div className='flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col'>
                    <input type='text' value={city} name='city' onChange={e => setCity(e.target.value)} className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full py-2 px-4 border rounded-lg my-1 ' placeholder='City' />
                    <input type='text' value={postalCode} name='postalCode' onChange={e => setPostalCode(e.target.value)} className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full w-full py-2 px-4 border rounded-lg my-1 ' placeholder='Postal Code' />
                  </div>
                  <input type='text' value={streetAddress} name='streetAddress' onChange={e => setStreetAddress(e.target.value)} className='w-full py-2 px-4 border rounded-lg my-1 ' placeholder='Street Address' />
                  <input type='text' value={country} name='country' onChange={e => setCountry(e.target.value)} className='w-full py-2 px-4 border rounded-lg my-1 ' placeholder='Country' />
                </div>
                <input type='hidden' value={cartProducts.join(',')} name='products'/>
                <div className='flex justify-center w-full'>
                  <button type='submit' className='bg-teal-700 hover:bg-teal-600 active:bg-teal-500 hover:translate-y-1 transition duration-200 text-white p-2 rounded-lg xl:w-2/3 lg:w-2/3 md:w-full sm:w-full w-full'>
                    Continue to payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-full grid place-content-center overflow-x-hidden overflow-y-hidden'>
          <div className='w-full bg-white p-5 rounded-xl mx-5'>
            <div className='text-center text-2xl'>Your Card is Empty</div>
            <div className='flex justify-center mt-5'>
              <button type='button' onClick={() => handleHome()} className='bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 hover:translate-y-1 transition duration-200 text-white py-2 px-4 rounded-lg'>
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Cart