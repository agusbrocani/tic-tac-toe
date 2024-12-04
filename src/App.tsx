import './App.css'

function App() 
{
  const cantidadDeCasillas = 9
  const turnosJugados: string[] = Array(cantidadDeCasillas).fill("") //cada indice va a ser una jugada => PUEDO GUARDAR EL NRO DE JUGADA asi tengo un historico

  /*
    STATE => turno para ver a quien le toca -> const [valueCruzOCirculo, setCruzOCirculo] = useState("X") -> por defecto arranca X
  */
  function sacoLaKeyDelBotonYAlmacenoCruzOCirculoEnPosicionDeTurnosJugados(): void
  {
    //turnosJugados[evento.target.key] = valueCruzOCirculo
    //setCruzOCirculo("X" u "O")
    //CHEQUEO GANADOR
  }


  return (
    <>
    </>
  )
}

export default App
