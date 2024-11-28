'use client';

import Map, { Marker } from 'react-map-gl';

import { mapMarkers } from '@/constants/map';

import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './map-component.module.scss';

export const MapComponent: React.FC = () => {
  return (
    <div className={styles.map}>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{ longitude: 24.645232, latitude: 53.409065, zoom: 5 }}
        style={{ height: '100%', width: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {mapMarkers.map(({ id, longitude, latitude }) => (
          <Marker key={id} longitude={longitude} latitude={latitude} anchor="bottom" />
        ))}
      </Map>
    </div>
  );
};
