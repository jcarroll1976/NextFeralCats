import React from 'react';
import OutdoorCat from "../../public/assets/outdoorcat.jpg"
import CalicoKitten from "../../public/assets/CalicoKitten.jpg"
import FoliageCat from "../../public/assets/CatinFoliage.jpg"
import Image from 'next/image';

type Props = {}

function Help({}: Props) {
  return (
    <div>
        <h1 className='text-2xl uppercase'>Getting Help</h1>
        <div className=' grid grid-cols-3 grid-rows-2 gap-x-8 gap-y-8 my-5'>
            <div className='bg-black col-span-1 row-span-3'>
                <Image
                src={OutdoorCat}
                alt='Orange cat outdoors'
                className='object-cover'
                />
            </div>
            <div className='bg-black col-span-1 row-span-3'>
                <Image
                    src={CalicoKitten}
                    alt='Calico kitten outdoors'
                    className='object-cover'
                    />
            </div>
            <div className='bg-black col-span-1 row-span-3'>
                <Image
                    src={FoliageCat}
                    alt='Cat in foliage'
                    className='object-cover'
                    />
            </div>
            <div className='bg-black col-span-1 row-span-3'>Hello</div>
            <div className='bg-black col-span-1 row-span-3'>Hello</div>
            <div className='bg-black col-span-1 row-span-3'>Hello</div>
        </div>
    </div>
  )
}

export default Help