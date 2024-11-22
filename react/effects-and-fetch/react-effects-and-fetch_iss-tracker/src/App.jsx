import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const timer = setInterval(getISSCoords, 10000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch ISS coordinates");
      const data = await response.json();
      setCoords({ longitude: data.longitude, latitude: data.latitude });
      console.log(data);
    } catch (error) {
      console.errror(error.message);
    }
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
