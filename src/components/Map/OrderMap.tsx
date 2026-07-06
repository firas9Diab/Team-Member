import { useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

const OrderMap = () => {
  const warehouse = {
    latitude: 31.95,
    longitude: 35.91,
  };

  const savedLocation = JSON.parse(
    localStorage.getItem("deliveryLocation") || "{}",
  );

  const customer = {
    latitude: savedLocation.latitude ?? 31.9539,
    longitude: savedLocation.longitude ?? 35.9106,
    address: savedLocation.address ?? "No address selected",
  };

  const [route, setRoute] = useState<any>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const getRoute = async () => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${warehouse.longitude},${warehouse.latitude};${customer.longitude},${customer.latitude}?geometries=geojson&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.routes || data.routes.length === 0) {
        return;
      }

      const currentRoute = data.routes[0];

      setRoute({
        type: "Feature",
        geometry: currentRoute.geometry,
      });

      setDistance((currentRoute.distance / 1000).toFixed(2));

      setDuration((currentRoute.duration / 60).toFixed(0));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoute();
  }, []);

  return (
    <div>
      <h3>Track Order</h3>

      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          latitude: (warehouse.latitude + customer.latitude) / 2,
          longitude: (warehouse.longitude + customer.longitude) / 2,
          zoom: 11,
        }}
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "10px",
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        <Marker latitude={warehouse.latitude} longitude={warehouse.longitude}>
          🏠
        </Marker>

        <Marker latitude={customer.latitude} longitude={customer.longitude}>
          📍
        </Marker>

        {route && (
          <Source id="route" type="geojson" data={route}>
            <Layer
              id="route-line"
              type="line"
              paint={{
                "line-color": "#3b82f6",
                "line-width": 5,
              }}
            />
          </Source>
        )}
      </Map>

      <div>
        <div>
          <strong>Warehouse</strong>
          <p>Main Warehouse</p>
        </div>

        <div>
          <strong>Customer</strong>
          <p>{customer.address}</p>
        </div>
      </div>

      <div>
        <div>
          <strong>Distance</strong>
          <p>{distance} km</p>
        </div>

        <div>
          <strong>Estimated Time</strong>
          <p>{duration} min</p>
        </div>
      </div>
    </div>
  );
};

export default OrderMap;
