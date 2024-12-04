function Boton({id, key, chequearGanador}): any
{
    return (
        <button id = {id} onClick = {chequearGanador}> {key} </button>
    )
}

export default Boton