"use client";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type * as Leaflet from "leaflet";
import type { MarkerClusterGroupProps } from "react-leaflet-markercluster";
import { AllCrimesProp } from "@/types";
import type { MarkerCluster } from "leaflet";

// Dynamically import Leaflet components
const LeafletMapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const LeafletTileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const LeafletMarker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const LeafletPopup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });
const LeafletMarkerClusterGroup = dynamic(() => import("react-leaflet-markercluster"), { ssr: false }) as React.ComponentType<MarkerClusterGroupProps>;

export default function CrimeMapInner({ crimes }: AllCrimesProp) {
  const [markerIcon, setMarkerIcon] = useState<Leaflet.Icon | null>(null);
  const LRef = useRef<typeof Leaflet>(null);

  useEffect(() => {
    import("leaflet").then((L: typeof Leaflet) => {
      LRef.current = L;
      const customIcon = L.icon({
        iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      setMarkerIcon(customIcon);
    });
  }, []);

  const createClusterCustomIcon = (cluster: MarkerCluster): L.DivIcon => {
    if (!LRef.current) throw new Error("Leaflet not loaded");

    const count = cluster.getChildCount();
    let size = 30;
    let backgroundColor = "#b5e28c"; // green

    if (count >= 10 && count < 100) {
      size = 40;
      backgroundColor = "#f1d35a"; // yellow
    } else if (count >= 100) {
      size = 50;
      backgroundColor = "#fd9c73"; // red
    }

    return new LRef.current.DivIcon({
      html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background-color: ${backgroundColor};
      color: white;
      font-weight: bold;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      border: 2px solid white;
    ">${count}</div>`,
      className: "", // clear default class
      iconSize: LRef.current.point(size, size, true),
    });
  };

  if (!markerIcon) return null;

  return (
    <LeafletMapContainer center={[52.6336, -1.691]} zoom={12} style={{ height: "450px", width: "100%" }} className="z-10 relative">
      <LeafletTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <LeafletMarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
        {crimes.map((crime, index: number) => (
          <LeafletMarker key={index} position={[parseFloat(crime.location.latitude), parseFloat(crime.location.longitude)]} icon={markerIcon}>
            <LeafletPopup className="p-0">
              <div className="flex flex-col space-y-2">
                <span>Category: {crime.category}</span>
                <span>Street: {crime.location.street.name}</span>
              </div>
              {crime.outcome_status && (
                <div className="flex flex-col space-y-2">
                  <span>Outcome: {crime.outcome_status.code}</span>
                  <span>Reason: {crime.outcome_status.name} </span>
                </div>
              )}
            </LeafletPopup>
          </LeafletMarker>
        ))}
      </LeafletMarkerClusterGroup>
    </LeafletMapContainer>
  );
}
