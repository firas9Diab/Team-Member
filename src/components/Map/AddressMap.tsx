import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";

interface IAddress {
  onSelectLocation: (
    latitude: number,
    longitude: number,
    address: string,
  ) => void;
}
const AddressMap = ({ onSelectLocation }: IAddress) => {
  const [search, setSearch] = useState("");

  const [location, setLocation] = useState({
    latitude: 31.9539,
    longitude: 35.9106,
  });

  const [address, setAddress] = useState("");

  const searchAddress = async () => {
    if (!search) return;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      search,
    )}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.features.length) {
        alert("No results found");
        return;
      }

      const place = data.features[0];

      setLocation({
        latitude: place.center[1],
        longitude: place.center[0],
      });

      setAddress(place.place_name);

      onSelectLocation(place.center[1], place.center[0], place.place_name);
    } catch (error) {
      console.error(error);
    }
  };

  const reverseGeocode = async (latitude: number, longitude: number) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.features.length) {
      setAddress(data.features[0].place_name);

      onSelectLocation(latitude, longitude, data.features[0].place_name);
    }
  };

  const handleMapClick = (event: any) => {
    const { lng, lat } = event.lngLat;

    setLocation({
      latitude: lat,
      longitude: lng,
    });

    reverseGeocode(lat, lng);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      setLocation({
        latitude: lat,
        longitude: lng,
      });

      reverseGeocode(lat, lng);
    });
  };

  return (
    <div>
      <h2>Choose Delivery Address</h2>

      <input
        placeholder="Search Address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchAddress}>Search</button>

      <button onClick={getCurrentLocation}>Use Current Location</button>

      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          latitude: location.latitude,
          longitude: location.longitude,
          zoom: 13,
        }}
        longitude={location.longitude}
        latitude={location.latitude}
        zoom={13}
        onClick={handleMapClick}
        style={{
          width: "100%",
          height: "500px",
          marginTop: "20px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker latitude={location.latitude} longitude={location.longitude}>
          📍
        </Marker>
      </Map>

      <div>
        <h3>Selected Address</h3>

        <p>{address}</p>
      </div>
    </div>
  );
};

export default AddressMap;
