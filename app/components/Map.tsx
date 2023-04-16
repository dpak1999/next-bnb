"use client";

import L from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { FC } from "react";

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

interface MapProps {
  mapCenter: number[];
}

const Map: FC<MapProps> = ({ mapCenter }) => {
  return (
    <MapContainer
      center={(mapCenter as L.LatLngExpression) || [51, -0.09]}
      zoom={mapCenter ? 4 : 2}
      scrollWheelZoom={false}
      className="h-[35vh] rounded-lg"
    ></MapContainer>
  );
};

export default Map;
