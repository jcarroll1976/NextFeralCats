import React from 'react'

type Props = {}

function Help({}: Props) {
  return (
    <div>
        <h1 className='text-2xl uppercase'>Getting Help</h1>
        <div className='grid-cols-3 grid-rows-2 gap-x-8 gap-y-8 my-5'>
            <div className='bg-black h-20'></div>
            <div className='bg-black h-20'></div>
            <div className='bg-black h-20'></div>
            <div className='bg-black h-20'></div>
            <div className='bg-black h-20'></div>
            <div className='bg-black h-20'></div>
        </div>
    </div>
  )
}

export default Help