import React from 'react'
import Image from 'next/image'
import Tabby from "public/assets/tabby.jpg";

type Props = {}

function Banner() {
  return (
    <section>
        <Image
        src={Tabby}
        alt='Tabby Cat'
        className='object-cover h-[400px] w-full'
        />

    </section>
  )
}

export default Banner