"use client"

/*import {useState,useMemo, useCallback, useRef} from 'react';
import {
    GoogleMap,
    Marker
} from "@react-google-maps/api";
import Places from './Places';

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function Map() {
const [feedingSite, setFeedingSite] = useState<LatLngLiteral>();
const mapRef = useRef<GoogleMap>();
/*const center = useMemo<LatLngLiteral>(
    () => ({lat: 43.45, lng: -80.49}),
    []
);
const center = useMemo<LatLngLiteral>(()=> ({lat: 42.241150, lng: -83.612991}),[])
const options = useMemo<MapOptions>(
    () => ({
        disableDefaultUI: true,
        clickableIcons: true
    }),
    []
);
const onLoad = useCallback((map: GoogleMap) => (mapRef.current = map),[]);
  return (
    <section className='flex w-full h-48'>
        <div className='w-[20%] p-4 bg-[#14161a] text-[#fff]'>
            <h1>Commute?</h1>
            <Places setFeedingSite={(position) => {
                setFeedingSite(position);
                mapRef.current?.panTo(position)

            }} />
        </div>
        <div className="w-[80%] h-48">
            <GoogleMap 
            zoom={14} 
            center={center} 
            mapContainerClassName='w-full h-48'
            options={options}>

            {feedingSite && <Marker position={feedingSite} />}
            </GoogleMap>
        </div>
    </section>
  )
}*/
import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";
import Places from "./Places";

type LatLngLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

export default function Map() {
  const [office, setOffice] = useState<LatLngLiteral>();
  const mapRef = useRef<GoogleMap>();
  const center = useMemo<LatLngLiteral>(
    () => ({ lat: 42.241150, lng: -83.612991 }),
    []
  );
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: GoogleMap) => (mapRef.current = map), []);

  useEffect(() => {
    if (office && mapRef.current) {
      mapRef.current.panTo(office);
    }
  }, [office]);

  return (
    <div className="flex w-full h-48">
      <div className="w-[20%] p-4 bg-[#14161a] text-[#fff]">
        <h1>Commute?</h1>
        <Places
          setOffice={(position) => {
            setOffice(position);
          }}
        />
        {!office && <p>Enter the address of your office.</p>}
      </div>
      <div className="w-[80%] h-48">
        <GoogleMap
          zoom={16}
          center={center}
          mapContainerClassName="w-full h-48"
          options={options}
          onLoad={onLoad}
        >
          {office && (
            <Marker
              position={office}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
}



