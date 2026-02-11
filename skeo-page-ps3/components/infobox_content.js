import { useState, useEffect } from "react";
import useSWR from "swr";

function InfoboxContent() {
  const [time, setTime] = useState(new Date());
  const [minDelayPassed, setMinDelayPassed] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  // minimum skeleton time (e.g. 450ms)
  useEffect(() => {
    const t = setTimeout(() => setMinDelayPassed(true), 450);
    return () => clearTimeout(t);
  }, []);

  const formattedTime = time
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .toLowerCase();

  const formattedDate = time
    .toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: geoData, error: geoError } = useSWR("/api/geolib", fetcher);

  const roughLocation = geoData?.city;

  const { data: weatherData, error: weatherError } = useSWR(
    roughLocation
      ? `http://api.weatherapi.com/v1/forecast.json?key=7de18e37cf0249249d274829260102&q=${roughLocation}&days=1&aqi=no&alerts=no`
      : null,
    fetcher
  );

  if (weatherError) return <div>failed to load weather data</div>;
  if (geoError) return <div>failed to load geolocation data</div>;

  const hasWeather = !!weatherData?.current;
  const isReady = hasWeather && minDelayPassed;

  const currentWeather = weatherData?.current?.condition?.text ?? "";
  const currentTemp = weatherData?.current?.temp_f;

  return (
    <div id="infobox-content">
      <div className="infobox-date-time">
        <p className="infobox-date info-p">{formattedDate}</p>
        <p className="infobox-time info-p">{formattedTime}</p>
      </div>

      {/* Crossfade container */}
      <div className="infobox-weather crossfade">
        {/* Placeholder layer */}
        <div className={`layer ${isReady ? "out" : "in"}`}>
          <p className="infobox-date info-p">getting the weather...</p>
          <p className="infobox-temp info-p">...and the temperatures</p>
        </div>

        {/* Real data layer */}
        <div className={`layer ${isReady ? "in" : "out"}`}>
          <p className="infobox-date info-p">{currentWeather.toLowerCase()}</p>
          <p className="infobox-temp info-p">{currentTemp}°f</p>
        </div>
      </div>
    </div>
  );
}

export default InfoboxContent;
