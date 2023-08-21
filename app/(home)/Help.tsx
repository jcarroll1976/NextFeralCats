import React from 'react';
import OutdoorCat from "../../public/assets/outdoorcat.jpg"
import CalicoKitten from "../../public/assets/calicokitten.jpg"
import FoliageCat from "../../public/assets/foliagecat1.jpg"
import Image from 'next/image';

type Props = {}

function Help({}: Props) {
  return (
    <div>
        <h1 className='text-2xl uppercase'>Getting Help</h1>
        <div className='flex my-4'>
            <div className='mx-2 rounded-md'>
                <Image
                src={OutdoorCat}
                alt='Orange cat outdoors'
                className='object-cover h-64 w-72'
                />
            </div>
            <div className=' relative mx-2 rounded-md group hover:bg-transparent'>
                <Image
                    src={CalicoKitten}
                    alt='Calico kitten outdoors'
                    className='object-cover h-64 w-72'
                    />
                <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full bg-neutral-50/70'>
                    <h3 className='text-xl uppercase'>Do you need advice about Cats?</h3>
                </div>
            </div>
            
            <div className='mx-2 rounded-md'>
                <Image
                    src={FoliageCat}
                    alt='Cat in foliage'
                    className='object-cover h-64 w-72'
                    />
            </div>
            {/*<div className='bg-black h-[300px] w-[300px]'>Hello</div>
            <div className='bg-black h-[300px] w-[300px]'>Hello</div>
  <div className='bg-black h-[300px] w-[300px]'>Hello</div>*/}
        </div>
    </div>
  )
}

export default Help