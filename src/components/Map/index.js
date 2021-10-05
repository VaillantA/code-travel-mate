/* import * as 'mapbox-gl/dist/mapbox-gl.css';
import React, { useState } from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoicGFzY2FhbCIsImEiOiJja3NkbzQ1NTgwc2lsMzFudXh0Mnc0b3QzIn0.v5_oj5NH5j0A4OswA5krKQ';

const Map = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: 122.4376,
    zoom: 8,
  });

  return (
    <MapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
};

export default Map; */

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Map = () => (
  
)

export default Map;
