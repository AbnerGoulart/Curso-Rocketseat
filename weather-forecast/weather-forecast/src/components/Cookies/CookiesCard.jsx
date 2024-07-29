import { useEffect, useState } from "react"
import "./CookiesCard.css"
import Cookies from "universal-cookie"

function CookiesCard() {
  const [cookiesVisible, setCookiesVisible] = useState(false)
  const cookieName = "cookies-acceptance"
  const cookies = new Cookies()

  useEffect(() => {
    const timer = setTimeout(() => {
      const cookiesAcceptance = cookies.get(cookieName)

      if (cookiesAcceptance != true) {
        setCookiesVisible(true);
      } 
    }, 1000); // Executa após 1 segundo

    // Limpeza do timer
    return () => clearTimeout(timer);
  }, 
  /* 
    Este array contem as variaveis de estado que devem
    ser escutadas e que dispararão esta função quando 
    seu valor for alterado 
  */
  []);

  async function acceptCookies() {
    cookies.set(cookieName, true)

    setCookiesVisible(false)
    console.log(cookiesVisible)
  }

  return(
    <div className={cookiesVisible ? 'fade-in':'fade-out'}>
      <div className="cookies-card">
        <div className={"cookies-message"}>
          Nós utilizamos cookie para melhorar sua experiência e os utilizamos para análise anonima de dados. 
          <strong><a>Entenda melhor em nossa política de privacidade.</a></strong>
        </div>
        <div className={"card-options"}>
          <button className={"white-btn"}>Rejeitar</button>
          <button className={"orange-btn"} onClick={ () => acceptCookies()}>Aceitar todos os Cookies</button>
        </div>
      </div>
    </div>
  )
}

export default CookiesCard