import Boton from './Boton'
import { useState } from 'react'

function insertarOrdenado<T>(coleccion: T[], aInsertar: T, comparar: (a: T, b: T) => number): T[]
{
  const ceColeccion = coleccion.length
  let i = 0

  while(i < ceColeccion && comparar(aInsertar, coleccion[i]) > 0)
  {
    i++
  }

  coleccion.splice(i, 0, aInsertar)

  return coleccion
}

function verificarGanador(coleccionAVerificar: number[]): boolean
  {
    const combinacionesGanadoras: number[][] = 
    [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 4, 6],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8]
    ]
    const ceColeccionAVerificar = coleccionAVerificar.length
    const ceCombinacionesGanadoras = combinacionesGanadoras[0].length
    
    if(ceColeccionAVerificar < ceCombinacionesGanadoras) //salida anticipada en caso de que no haya que verificar
    {
      return false
    }

    for(const combinacionGanadora of combinacionesGanadoras)
    {
      let idxColeccionAVerificar = 0
      let match = 0
      while(idxColeccionAVerificar < ceColeccionAVerificar)
      {
        for(let casilla = 0; casilla < ceCombinacionesGanadoras; casilla++)
        {
          if(combinacionGanadora[casilla] === coleccionAVerificar[idxColeccionAVerificar])
          {
            match++
            break
          }
        }
        if(ceCombinacionesGanadoras === match)
        {
          return true
        }
        idxColeccionAVerificar++
      }
    }

    return false
  }

function Tablero(): JSX.Element
{
  const botones = []
  const filas = []
  const cantidadDeFilas = 3
  const cantidadDeBotones = 9

  const [casillasOcupadasX, setCasillasOcupadasX] = useState<number[]>([])
  const [casillasOcupadasO, setCasillasOcupadasO] = useState<number[]>([])
  const [esGanador, setEsGanador] = useState("")


  const comparaEnteros = (a: number, b: number): number => a - b
  let casillasOcupadas: number[]

  const [nroTurno, setNroTurno] = useState(0)

  function handleClick(evento: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  {
    // console.log(evento.currentTarget.id)
    // console.log(evento.currentTarget.textContent)

    if(0 === nroTurno % 2) //el turno es par => X
    {
      evento.currentTarget.textContent = "X"
      casillasOcupadas = [...casillasOcupadasX]
      casillasOcupadas = insertarOrdenado(casillasOcupadas, Number(evento.currentTarget.id), comparaEnteros)
      setCasillasOcupadasX(casillasOcupadas)
    }
    else
    {
      evento.currentTarget.textContent = "O"
      casillasOcupadas = [...casillasOcupadasO]
      casillasOcupadas = insertarOrdenado(casillasOcupadas, Number(evento.currentTarget.id), comparaEnteros)
      setCasillasOcupadasO(casillasOcupadas)
    }
    evento.currentTarget.disabled = true

    console.log(casillasOcupadas)
    if(true === verificarGanador(casillasOcupadas))
    {
      console.log(`Tenemos un ganador: ${0 === nroTurno % 2? "X" : "O"}`)
      setEsGanador(0 === nroTurno % 2? "X" : "O")
    }

    setNroTurno(nroTurno + 1)
  }

  for(let i = 0; i < cantidadDeBotones; i++) 
  {
    botones.push(
      <Boton
        key = {i} //Identificador para componentes en el árbol -> Reconciliación.
        id = {`${i}`} //Identificar cada elemento del DOM
        // value = {(i + 1).toString()}  //value = ""
        value = ""
        handleClick = {handleClick}
      />
    )
  }

  for (let i = 0; i < cantidadDeFilas; i++) 
  {
    filas.push(
      <div className = "row" key={i}>
        {botones.slice(i * 3, (i + 1) * 3) /* shallow copy[copia referencia -> son componentes]: desde index 0, 3 y 6 hasta 3, 6 y 9 [sin incluir]*/}
      </div>
    )
  }

  return(
    <>
      {filas}
      {"" !== esGanador&& <span>Tenemos un ganador: {esGanador}</span>}
    </>
  )
}

export default Tablero