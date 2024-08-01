import "./Cookies.css"

function Cookies() {
  return(
    <div className="cookies-card">
      <div className={"cookies-message"}>
        Nós utilizamos cookie para melhorar sua experiência e os utilizamos para análise anônima de dados. 
        <strong><a>Entenda melhor em nossa política de privacidade.</a></strong>
      </div>
      <div className={"card-options"}>
        <button className={"white-btn"}>Rejeitar</button>
        <button className={"orange-btn"}>Aceitar todos os Cookies</button>
      </div>
    </div>
  )
}

export default Cookies