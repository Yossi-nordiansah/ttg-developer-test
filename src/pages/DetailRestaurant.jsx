import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

const koordinatRestoran = [-6.200000, 106.816666]; // Format [lat, lng]

const DetailRestaurant = () => {
    return (
        <div>
            <MapContainer
                center={koordinatRestoran}
                zoom={15}
                scrollWheelZoom={false}
                style={{ height: '300px', width: '100%' }} // Atur ukuran
            >
                {/* TileLayer adalah penyedia peta (misalnya OpenStreetMap) */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marker di lokasi restoran */}
                <Marker position={koordinatRestoran}>
                    <Popup>Lokasi Restoran Anda</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default DetailRestaurant;