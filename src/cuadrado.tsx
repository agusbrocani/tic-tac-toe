const suma = (a : number, b : number) : number => a + b;

let a : number = 10
const b : number = 20

for(let i : number = 0; i < b; i++)
{
    a++;
}

function Cuadrado()
{
    return(
        <>
            <span>Suma: {suma(a, b)}</span>
        </>
    )
}

export default Cuadrado