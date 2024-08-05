import { useState, useRef } from 'react';
import './App.css';
import WeatherInfo from './components/WeatherInfo/WeatherInfo';
import CookiesCard from './components/Cookies/CookiesCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [city, setCity] = useState('');
  const inputRef = useRef();

  function handleSearch() {
    setCity(inputRef.current.value);
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className='App'>
      <h1>Previsão do Tempo</h1>
      <div className="form">
        <input ref={inputRef} type="text" placeholder='Cidade' onKeyUp={handleKeyPress} />
        <button onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <WeatherInfo city={city} />
      <CookiesCard/>
    </div>
  );
}

export default App;
