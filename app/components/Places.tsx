import React from 'react';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from 'use-places-autocomplete';

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

type Props = {
    setFeedingSite: (position: google.maps.LatLngLiteral) => void;
}

function Places({setFeedingSite}: Props) {
    const {ready, value, setValue, suggestions: {status, data}, clearSuggestions} = usePlacesAutocomplete();

    const handleSelect = async(val:string) => {
        setValue(val, false);
        clearSuggestions();

        const results = await getGeocode({address: val});
        const {lat, lng} = await getLatLng(results[0]);
        setFeedingSite({lat, lng});
    }
    
  return (
    <Combobox onSelect={()=>{handleSelect}}>
        <ComboboxInput 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        className="w-full p-2" 
        placeholder='Enter feeding site address' 
        />
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" &&
                data.map(({place_id, description}) => (
                    <ComboboxOption key={place_id} value={description} />
                ))}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
  )
}

export default Places