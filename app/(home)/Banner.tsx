import React from 'react'
import Image from 'next/image'
import Tabby from "public/assets/tabby.jpg";

type Props = {}

function Banner() {
  return (
    <section className='w-full h-20'>
        <Image
        src={Tabby}
        alt='Tabby Cat'
        className='bg-cover'
        />

    </section>
  )
}

export default Banner