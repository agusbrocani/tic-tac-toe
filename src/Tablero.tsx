import Boton from './Boton'

function Tablero(): JSX.Element
{
  const cantidadDeBotones = 9
  const cantidadDeFilas = 3
  const botones = [];
  const filas = [];

  function handleClick(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  {
    console.log(evento.currentTarget.id)
    console.log(evento.currentTarget.value)
  }

  for(let i = 0; i < cantidadDeBotones; i++) 
  {
    botones.push(
      <Boton
        key = {i} //Identificador para componentes en el árbol -> Reconciliación.
        id = {`${i}`} //Identificar cada elemento del DOM
        value = {(i).toString()}  //value = ""
        handleClick = {handleClick}
      />
    )
  }

  for (let i = 0; i < cantidadDeFilas; i++) 
  {
    filas.push(
      <div key={i}>
        {botones.slice(i * 3, (i + 1) * 3) /* shallow copy[copia referencia -> son componentes]: desde index 0, 3 y 6 hasta 3, 6 y 9 [sin incluir]*/}
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