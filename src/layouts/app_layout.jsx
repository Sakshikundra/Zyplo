import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'
const app_layout = () => {
  return (
    <div>
        <main className='min-h-screen container mx-auto px-10'>
          
            <Header />
            <Outlet/>
        </main>
        <div className='p-10 text-center bg-gray-800 text-white mt-10'>
          Made with ❤️ by SAKSHI KUNDRA 
        </div>
    </div>
  )
}

export default app_layout;