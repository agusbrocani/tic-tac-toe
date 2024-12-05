type PropsDeBoton = 
{
    value: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }

function Boton({value, handleClick}: PropsDeBoton): JSX.Element
{
    return (
        <button onClick = {handleClick}> {value} </button>
    )
}

export default Boton