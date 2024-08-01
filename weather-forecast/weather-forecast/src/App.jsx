import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import CookiesCard from './components/Cookies/CookiesCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [weather, setWeather] = useState()
  const [countryCode, setCountryCode] = useState('')
  const inputRef = useRef()

  async function searchCity () {
    const city = inputRef.current.value
    const key = '083ec2fd8333b598e2c4bff31acf4bd8'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
    setCountryCode(apiInfo.data.sys.country)  // Armazena o código do país

    console.log(apiInfo)
  }

  async function searchIfEnter(event) {
    if (event.key === 'Enter') {
      await searchCity()
    }
  }

  return (
    <div className='App'>
      <h1>Previsão do Tempo</h1>
      <div className="form">
        <input ref={inputRef} type="text" placeholder='Cidade' onKeyUp={e => searchIfEnter(e)} />
        <button onClick={searchCity}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      {weather && 
        <div>
          <img className='flag' src={`https://flagsapi.com/${countryCode}/shiny/64.png`} alt="Bandeira do país" />
          <WeatherInfo weather={weather}/>
        </div>
      }
      <CookiesCard/>
    </div>
  )
}

export default App
