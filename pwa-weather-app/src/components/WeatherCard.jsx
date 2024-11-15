function WeatherCard({ data }) {
  const {
    name,
    sys: { country, sunrise, sunset },
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    dt,
  } = data;

  const formattedDate = new Date(dt * 1000).toLocaleString();
  const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

  return (
    <div>
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "900px" }}>
        <div className="card-header text-center bg-primary text-white">
          <h2>
            {name}, {country}
          </h2>
          <p>{formattedDate}</p>
        </div>

        <div className="card-body">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
            <div className="text-center">
              <img
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                alt={weather[0].description}
              />
              <h4 className="mt-2">{weather[0].main}</h4>
              <p className="text-muted">{weather[0].description}</p>
            </div>
            <div className="text-center">
              <h1>{temp}°C</h1>
              <p>Feels like: {feels_like}°C</p>
              <p>
                Min: {temp_min}°C | Max: {temp_max}°C
              </p>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col">
              <p>
                <strong>Humidity:</strong> {humidity}%
              </p>
            </div>
            <div className="col">
              <p>
                <strong>Pressure:</strong> {pressure} hPa
              </p>
            </div>
            <div className="col">
              <p>
                <strong>Wind Speed:</strong> {speed} m/s
              </p>
            </div>
          </div>
        </div>

        <div className="card-footer text-center">
          <div className="row">
            <div className="col">
              <p>
                <strong>Sunrise:</strong> {sunriseTime}
              </p>
            </div>
            <div className="col">
              <p>
                <strong>Sunset:</strong> {sunsetTime}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default WeatherCard;
