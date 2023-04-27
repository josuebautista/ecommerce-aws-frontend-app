import Header from '@/components/Header'
import Profile from '@/components/Profile';
import { useSession } from 'next-auth/react';
import React from 'react'

const Account = () => {
  const { data: session } = useSession();

  return (
    <main className='w-screen h-screen bg-slate-100 overflow-x-hidden'>
      <Header />
      <Profile session={session}/>
    </main>
  )
}

export default Account