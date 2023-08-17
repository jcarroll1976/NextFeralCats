"use client"

import Image from 'next/image';
import { useLoadScript } from "@react-google-maps/api";
import Banner from './(home)/Banner';
import Map from "../app/components/Map"
import Help from '../app/(home)/Help';

export default function Home() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  if(!isLoaded) return <div>Loading...</div>

  return (
    <main>
      <Banner />
      <div>
        <Help/>
      </div>
      <Map />
    </main>
  )
}
