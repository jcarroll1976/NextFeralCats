"use client"

import {useState,useMemo, useCallback, useRef} from 'react';
import {
    GoogleMap,
    Marker
} from "@react-google-maps/api";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function Map() {
/*const [feedingSite, setFeedingSite] = useState<LatLngLiteral>();
const mapRef = useRef<GoogleMap>();
const center = useMemo<LatLngLiteral>(
    () => ({lat: 43.45, lng: -80.49}),
    []
);*/
const center = useMemo(()=> ({lat: 42.241150, lng: -83.612991}),[])
  return (
    <section className='flex w-full h-48'>
        <div className='w-[20%] p-4 bg-[#14161a] text-[#fff]'>
            <h1>Commute?</h1>
        </div>
        <div className="w-[80%] h-48">
            <GoogleMap zoom={12} center={center} mapContainerClassName='w-full h-48'></GoogleMap>
        </div>
    </section>
  )
}

 