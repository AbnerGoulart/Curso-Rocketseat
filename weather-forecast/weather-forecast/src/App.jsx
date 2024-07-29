import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInfo from './components/WeatherInfo/WeatherInfo'
import Cookies from './components/Cookies/Cookies'

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

  async function showInput(event) {
    console.log(event)
  }

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Cidade' onChange={e => showInput(e)} />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInfo weather={weather}/>}
      <Cookies/>
    </div>
  )
}

export default App
