
type Props = { image: string };


const random = () => Math.floor(Math.random() * 123) + 1;

export const RandomFox = ({ image }: Props):JSX.Element => {

    // Rest of your code...

    return <img width={320} height="auto" src={image} className="rounded"></img>;
};

// Definir los props en react consiste en definir el 
// tipo de dato que va a recibir el componente dentro de un objeto 
// que se le pasa como parametro a la funcion que define el componente
// En este caso el componente RandomFox recibe un objeto de tipo Props
