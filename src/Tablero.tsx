import Boton from './Boton'

function Tablero(): JSX.Element
{
  function handleClick(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  {
    console.log(evento.currentTarget.id)
    console.log(evento.currentTarget.value)
  }

  return(
    <>
    <div>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
    </div>
    <div>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
    </div>
    <div>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
      <Boton value = "" handleClick = {handleClick}></Boton>
    </div>
    </>
  )
}

export default Tablero