"use client"

import Map from '@/app/components/Map'
import React from 'react'
import { useLoadScript } from "@react-google-maps/api";

function FeedingLocations() {
const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
    });

    if(!isLoaded) return <div>Loading...</div>

  return (
    <div className='h-[700px]'>
        <Map />
    </div>
  )
}

export default FeedingLocations