import { signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const Profile = ({ session }) => {
  const router = useRouter();

  const handleLogOut = () => {
    router.push('/')
    signOut();
  }

  return (
    <>
      {session ? (
        <div className='w-full py-6'>
          <div className='flex flex-col justify-between'>
            <div className='w-full flex justify-center'>
              <img src={session.user.image} alt={session.user.name + 'icon profile'} className='rounded-full' />
            </div>
            <div className='w-full flex justify-center mt-5'>
              <div className='text-xl'>{session.user.name}</div>
            </div>
            <div className='w-full flex justify-center mt-5'>
              <div className='text-xl'>{session.user.email}</div>
            </div>
            <div className='w-full flex justify-center mt-5'>
              <button onClick={() => handleLogOut()} className='bg-indigo-700 py-2 px-5 rounded-lg text-white hover:bg-indigo-600 active:bg-indigo-500 hover:-translate-y-1 transition duration-200'>Log out</button>
            </div>
          </div>
        </div>
      ) : (
        <div className='grid place-content-center w-full h-full'>
          <div className='bg-white rounded-xl p-6 text-center'>
            <div className='text-2xl'>You are not Log in</div>
            <button onClick={() => signIn()} className='bg-indigo-700 hover:bg-indigo-600 active:bg-indigo-500 hover:translate-y-1 transition duration-200 text-white px-5 rounded-lg  mt-3 py-2'>Sign In</button>
          </div>
        </div>
      )}
    </>
  )

}

export default Profile