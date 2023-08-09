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
  return (
    <div>Places</div>
  )
}

export default Places