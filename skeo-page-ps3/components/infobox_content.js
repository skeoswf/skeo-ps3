import useSWR from "swr";


function InfoboxContent() {

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data: geoData, error: geoError } = useSWR("/api/geolib", fetcher);

  let roughLocation = geoData?.city
  console.log(roughLocation);

  const { data: weatherData, error: weatherError } = useSWR(
    roughLocation
      ? `http://api.weatherapi.com/v1/forecast.json?key=7de18e37cf0249249d274829260102&q=${roughLocation}&days=1&aqi=no&alerts=no`
      : null,
    fetcher
  );


  // for now i dont care if the key is exposed, since it's a free api and the key is rate limited. if this becomes a problem in the future, we can do things proper and create an api route that fetches the weather data and keeps the key secret. but for -- pragmatically -- now this is fine and simpler.

  if (weatherError) return <div>failed to load weather data</div>;
  if (geoError) return <div>failed to load geolocation data</div>;
  if (!weatherData) return <div>loading weather data...</div>;
  if (!geoData) return <div>loading location...</div>;

  let currentWeather = weatherData?.current.condition.text;
  let currentTemp = weatherData?.current.temp_f;

  return (
    <div id="infobox-content">
      <div className="infobox-date-time">
        <p className="infobox-date info-p">dec. 10th, 2016</p>
        <p className="infobox-time info-p">11:14 pm</p>
      </div>
      <div className="infobox-weather">
        <p className="infobox-date info-p">{currentWeather.toLowerCase()}</p>
        <p className="infobox-temp info-p">{currentTemp}°f</p>
      </div>
    </div>
  );
}

export default InfoboxContent;

// i think we should just do time and weather. the location isnt that important and it can be wrong. we'll get their ip, use the geolocation api, and then get their rough location. the location we get isnt too accurate, but the weather we get from that location is usually pretty accurate. so we can just show the weather and time for that location, and not show the location itself. that way we avoid showing wrong information and we still provide useful information to the user.
