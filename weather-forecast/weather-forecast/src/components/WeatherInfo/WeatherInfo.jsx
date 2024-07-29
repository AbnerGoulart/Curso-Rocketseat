import "./WeatherInfo.css"

function WeatherInfo({weather}) {
  if (!weather || !weather.weather || !weather.weather[0] || !weather.main) {
    return <div>Dados do tempo não disponíveis.</div>;
  }

  return(
    <div>
      <h2 className={"title"}>{weather.name}</h2>
      <div>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
        <p>{Math.round(weather.main.temp)}°C</p>
      </div>
      <p>{weather.weather[0].description}</p>
      <div>
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}°C</p>
        <p>Umidade do ar0: {weather.main.humidity}%</p>
        <p>Pressão:{weather.main.pressure}hPa</p>
      </div>
    </div>
  )
}

export default WeatherInfo