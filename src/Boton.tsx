type PropsDeBoton =
    {
        id: string,
        value: string;
        handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    }

function Boton({ id, value, handleClick }: PropsDeBoton): JSX.Element {
    return (
        <button id={id} onClick={handleClick}>{value}</button> //usar propiedad disabled
    )
}

export default Boton