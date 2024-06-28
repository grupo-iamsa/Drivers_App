import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapsSubPage = ({ height = "70" }) => {
  const [location, setLocation] = useState({ lat: 19.3911155, lng: -99.2049794 });
  const [address, setAddress] = useState("");

  const geocodeLatLng = (lat, lng) => {
    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === "OK") {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          console.error("No results found");
        }
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          geocodeLatLng(latitude, longitude);
        },
        (error) => {
          console.error("Error obtaining location", error);
        }
      );
    }
  }, []);

  const defaultProps = {
    center: location,
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div className={`h-[${height}dvh] px-4 mb-24`}>
      <div className='grid gap-2 mb-2'>
        <label><strong>Ubicación</strong></label>
        <input type="text" 
          className="bg-gray-200 rounded-sm p-2"
          onClick={() => setActiveMap(true)}
          value={address.length > 0 ? address : "Cargando..."}
        />
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "TU_CLAVE_API_DE_GOOGLE_MAPS" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={location.lat}
          lng={location.lng}
          text={address.length > 0 ? address : "Cargando..."}
        />
      </GoogleMapReact>
      <div>{address}</div>
    </div>
  );
};
