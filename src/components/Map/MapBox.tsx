import Map, { Marker, Source, Layer, type MapRef } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import styles from "./MapBox.module.scss";

const Mapbox = () => {
  const [search, setSearch] = useState("");
  const mapRef = useRef<MapRef>(null);

  const [location, setLocation] = useState({
    latitude: 31.9539,
    longitude: 35.9106,
  });

  const start = {
    latitude: 31.95,
    longitude: 35.91,
  };

  const [route, setRoute] = useState<any>(null);

  const searchAddress = async () => {
    if (!search) return;

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      search,
    )}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.features.length === 0) {
      alert("No results found");
      return;
    }

    const place = data.features[0];

    setLocation({
      latitude: place.center[1],
      longitude: place.center[0],
    });
  };

  const getRoute = async () => {
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start.longitude},${start.latitude};${location.longitude},${location.latitude}?geometries=geojson&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`;

    const res = await fetch(url);
    const data = await res.json();

    const routeGeoJSON = data.routes[0].geometry;

    setRoute({
      type: "Feature",
      geometry: routeGeoJSON,
    });
  };

  const addModel = () => {
    const map = mapRef.current?.getMap();

    if (!map) return;

    if (map.getSource("tower")) return;

    map.addSource("tower", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {
          "model-uri": "https://docs.mapbox.com/mapbox-gl-js/assets/tower.glb",
        },
        geometry: {
          type: "Point",
          coordinates: [35.9106, 31.9539],
        },
      },
    });

    map.addLayer({
      id: "tower",
      type: "model",
      slot: "middle",
      source: "tower",
      minzoom: 15,
      layout: {
        "model-id": ["get", "model-uri"],
      },
      paint: {
        "model-opacity": 1,
        "model-rotation": [0, 0, 0],
        "model-scale": [1, 1, 1],
        "model-color-mix-intensity": 0,
        "model-cast-shadows": true,
      },
    });

    addCatIcon();
    addFogAndTerrain();
  };

  const addCatIcon = () => {
    const map = mapRef.current?.getMap();

    if (!map) return;

    map.loadImage(
      "https://docs.mapbox.com/mapbox-gl-js/assets/cat.png",
      (error, image) => {
        if (error || !image) return;

        if (!map.hasImage("cat")) {
          map.addImage("cat", image);
        }

        if (!map.getSource("cat-point")) {
          map.addSource("cat-point", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  geometry: {
                    type: "Point",
                    coordinates: [35.9102, 31.9539],
                  },
                },
              ],
            },
          });

          map.addLayer({
            id: "cat-layer",
            type: "symbol",
            source: "cat-point",
            layout: {
              "icon-image": "cat",
              "icon-size": 0.3,
            },
          });
        }
      },
    );
  };

  const addFogAndTerrain = () => {
    const map = mapRef.current?.getMap();

    if (!map) return;

    map.setFog({
      range: [-1, 2],
      "horizon-blend": 0.3,
      color: "white",
      "high-color": "#add8e6",
      "space-color": "#d8f2ff",
      "star-intensity": 0,
    });

    if (!map.getSource("mapbox-dem")) {
      map.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.terrain-rgb",
        tileSize: 512,
        maxzoom: 14,
      });

      map.setTerrain({
        source: "mapbox-dem",
        exaggeration: 1.5,
      });
    }
  };

  useEffect(() => {
    getRoute();
  }, [location]);

  return (
    <div>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search for an address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchAddress}>Search</button>
      </div>
      <Map
        ref={mapRef}
        onLoad={addModel}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          latitude: 31.9539,
          longitude: 35.9106,
          zoom: 16,
          pitch: 80,
          bearing: 160,
        }}
        onMove={(evt) =>
          setLocation({
            latitude: evt.viewState.latitude,
            longitude: evt.viewState.longitude,
          })
        }
        style={{ width: "100%", height: "500px" }}
        // mapStyle="mapbox://styles/mapbox/standard"
        mapStyle="mapbox://styles/mapbox/standard-satellite"
      >
        <Marker latitude={location.latitude} longitude={location.longitude}>
          📍
        </Marker>

        <Marker latitude={start.latitude} longitude={start.longitude}>
          🏠
        </Marker>

        {route && (
          <Source id="route" type="geojson" data={route}>
            <Layer
              type="line"
              paint={{
                "line-color": "#3b82f6",
                "line-width": 4,
              }}
            />
          </Source>
        )}
      </Map>
    </div>
  );
};

export default Mapbox;
