import React from 'react'

const Hero = () => {
  return (
    <div className='hero flex w-full h-screen bg-slate-100 pb-10'>
      <div className='hero-text w-1/2 flex justify-center flex-col text-3xl p-10'>
        <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita asperiores saepe in omnis quos enim quo mollitia repudiandae, corporis. cum iure sed odit at nemo dignissimos a suscipit et ullam!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quam quaerat saepe velit soluta of. </p>
        <button className='bg-red-600 p-4 mt-10 w-1/3 rounded-lg border-0 text-white text-2xl font-bold'>Learn More</button>
      </div>
        <div className='hero-ig w-1/2'><img src="https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full' /></div>
    </div>
  )
}

export default Hero
