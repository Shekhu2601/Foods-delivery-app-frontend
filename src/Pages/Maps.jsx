import React from 'react'
import { Marker, Polygon, Popup } from 'react-leaflet'
import { MapContainer } from 'react-leaflet/MapContainer'
import{ statesData }from './data'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';
import styles from './Maps.module.css'
const center = [51.501394864348825, -0.10770144607253271];
export default function Maps() {
  return (
    <>
    <div className={styles.container} >
    <MapContainer
      center={center}
      zoom={20}
      style={{  borderRadius:"10px", width: '90vw', height: '350px' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {
        statesData.features.map((state) => {
          const coordinates = state.geometry.coordinates[0].map((item) => [item[1], item[0]]);

          return (<Polygon
            pathOptions={{
              fillColor: '',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white'
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: "",
                  fillColor: "",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                })
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: 'white',
                  fillColor: ''
                });
              },
              click: (e) => {

              }
            }}
          />)
        })
      }
    </MapContainer>
    </div>
    
    
    
    </>
  )
}
