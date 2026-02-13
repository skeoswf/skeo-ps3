import { useState, useEffect, useRef } from "react";
import useSWR from "swr";

import hourNoteText from "../public/hover_notes/time_notes";
import weatherNoteText from "../public/hover_notes/weather_notes";

function InfoboxContent() {
  const infoboxDate = useRef(null);
  const dateNote = useRef(null);

  const infoboxWeather = useRef(null);
  const weatherNote = useRef(null);

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

  useEffect(() => {
    const handleResize = () => {
      if (!infoboxDate.current || !dateNote.current) return;

      let { left: dateNoteLeft, top: dateNoteTop } = infoboxDate.current.getBoundingClientRect();
      let { left: weatherNoteLeft, top: weatherNoteTop } = infoboxWeather.current.getBoundingClientRect();

      dateNote.current.style.setProperty("--left", `${dateNoteLeft}px`);
      dateNote.current.style.setProperty("--top", `${dateNoteTop}px`);

      weatherNote.current.style.setProperty("--left", `${weatherNoteLeft}px`);
      weatherNote.current.style.setProperty("--top", `${weatherNoteTop}px`);
    };

    window.addEventListener("resize", handleResize); // on resize, update the position of the note

    handleResize(); // also call it once on mount to set initial position

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const formattedTime = time
    .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    .toLowerCase();

  const formattedDate = time
    .toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase();

  const dateNoteShow = () => {
    dateNote.current.classList.remove("opacity-off");
    dateNote.current.classList.add("opacity-on");
  }

  const dateNoteHide = () => {
    dateNote.current.classList.remove("opacity-on");
    dateNote.current.classList.add("opacity-off");
  }

  const weatherNoteShow = () => {
    weatherNote.current.classList.remove("opacity-off");
    weatherNote.current.classList.add("opacity-on");
  }

  const weatherNoteHide = () => {
    weatherNote.current.classList.remove("opacity-on");
    weatherNote.current.classList.add("opacity-off");
  }

  const currentHour = time.getHours();
  const currentHourText = hourNoteText.find((note) => note.hour === (currentHour))

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data: geoData, error: geoError } = useSWR("/api/geolib", fetcher);

  const roughLocation = geoData?.city;

  const { data: weatherData, error: weatherError } = useSWR(
    roughLocation
      ? `http://api.weatherapi.com/v1/forecast.json?key=7de18e37cf0249249d274829260102&q=${roughLocation}&days=1&aqi=no&alerts=no`
      : null,
    fetcher
  );

  // is it awful practice to have an api key in frontend code? yes. but it was also free and i really doubt anyone would be enough of a loser (well...) to use/abuse it. it's easier to just do this for now. tech debt wont apply too much here even in the worse possible outcomes.

  if (weatherError) return <div>failed to load weather data</div>;
  if (geoError) return <div>failed to load geolocation data</div>;

  const hasWeather = !!weatherData?.current;
  const isReady = hasWeather && minDelayPassed;

  const currentWeather = weatherData?.current?.condition?.text ?? "";
  const currentTemp = weatherData?.current?.temp_f;

  return (
    <div id="infobox-content">

      <div className="infobox-date-time"
        ref={infoboxDate}
        onMouseEnter={dateNoteShow}
        onMouseLeave={dateNoteHide}
      >
        <p className="infobox-date info-p">{formattedDate}</p>
        <p className="infobox-time info-p">{formattedTime}</p>
      </div>

      {/* crossfade container */}
      <div className="infobox-weather crossfade" ref={infoboxWeather}
        onMouseEnter={weatherNoteShow}
        onMouseLeave={weatherNoteHide}>
        {/* placeholder layer */}
        <div className={`layer ${isReady ? "out" : "in"}`}>
          <p className="infobox-date info-p">getting the weather...</p>
          <p className="infobox-temp info-p">...and the temperatures</p>
        </div>

        {/* real data layer */}
        <div className={`layer ${isReady ? "in" : "out"}`}

        >
          <p className="infobox-date info-p">{currentWeather.toLowerCase()}</p>
          <p className="infobox-temp info-p">{currentTemp}°f</p>
        </div>

      </div>


      <div className="infobox-date-note opacity-off" ref={dateNote}>{currentHourText ? currentHourText.note : ""}</div>
      <div className="infobox-weather-note opacity-off" ref={weatherNote}>test content</div>
    </div>
  );


}


export default InfoboxContent;
