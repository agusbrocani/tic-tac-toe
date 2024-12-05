import Boton from './Boton'

function Tablero(): JSX.Element
{
  function handleClick(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  {
    console.log(evento.currentTarget.id)
    console.log(evento.currentTarget.value)
  }

  const cantidadDeBotones = 9
  const cantidadDeFilas = 3

  const botones = [];
  for(let i = 0; i < cantidadDeBotones; i++) 
  {
    botones.push(
      <Boton
        key = {i}
        id = {`${i}`}
        value = {(i).toString()}  //value = ""
        handleClick = {handleClick}
      />
    )
  }

  const filas = [];
  for (let i = 0; i < cantidadDeFilas; i++) 
  {
    filas.push(
      <div key={i}>
        {botones.slice(i * 3, (i + 1) * 3)}
      </div>
    )
  }

  return(
    <>
      {filas}
    </>
  )
}

export default Tablero