/**
 * Esta funcion inserta en una coleccion de manera ordenada utilizando el criterio de la funcion de comparacion
 * @param coleccion : array donde quiero insertar
 * @param aInsertar : elemento que quiero insertar en el array
 * @param comparar : `funcion de comparacion` para realizar la insercion
 * @returns : inicio del array donde inserto
 */
//Annotations para documentar

export function insertarOrdenado<T>(coleccion: T[], aInsertar: T, comparar: (a: T, b: T) => number): T[]
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