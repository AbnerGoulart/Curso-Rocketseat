import { useState, useEffect } from 'react';
import axios from 'axios';
import "./WeatherInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { faWind } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faUmbrella } from '@fortawesome/free-solid-svg-icons'



function WeatherInfo({ city }) {
  const [weather, setWeather] = useState(null);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    async function fetchWeather() {
      if (!city) return;
      const key = '083ec2fd8333b598e2c4bff31acf4bd8';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

      try {
        const apiInfo = await axios.get(url);
        setWeather(apiInfo.data);
        setCountryCode(apiInfo.data.sys.country);
      } catch (error) {
        console.error("Erro ao buscar dados do tempo:", error);
      }
    }

    fetchWeather();
  }, [city]);

  if (!weather || !weather.weather || !weather.weather[0] || !weather.main) {
    return <div>Dados do tempo não disponíveis.</div>;
  }

  return (
    <div className="weather-container">
      <div className="city">
        <h2 className="title">{weather.name}</h2>
        <img className='flag' src={`https://flagsapi.com/${countryCode}/shiny/64.png`} alt="Bandeira do país" />
      </div>
      <div className="temperature">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Icone do tempo" />
        <p>
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} className='icon'/>
          {Math.round(weather.main.temp)}°C
        </p>
      </div>

      <p className="description">{weather.weather[0].description}</p>
     
      <ul className="details">
        <li>Chuva:
          <FontAwesomeIcon icon={faUmbrella} className='icon'/>
          {Math.round(weather.main.feels_like)}°C
        </li>

        <li>Umidade:
          <FontAwesomeIcon icon={faDroplet} className='icon'/>
          {weather.main.humidity}%
        </li>

        <li>Ventos: 
          <FontAwesomeIcon icon={faWind} className='icon'/>
          {weather.main.pressure} hPa
        </li>
      </ul>
    </div>
  );
}

export default WeatherInfo;
