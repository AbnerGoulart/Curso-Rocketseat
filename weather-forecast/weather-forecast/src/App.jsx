import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import CookiesCard from './components/Cookies/CookiesCard'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity () {
    const city = inputRef.current.value
    const key = '083ec2fd8333b598e2c4bff31acf4bd8'

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)

    console.log(apiInfo)

  }

  async function searchIfEnter(event) {
    if (event.key == 'Enter') {
      await searchCity()
    }
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Cidade' onKeyUp={e => searchIfEnter(e)} />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInfo weather={weather}/>}
      <CookiesCard/>
    </div>
  )
}

export default App
