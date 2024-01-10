import { useRef } from "react";

type Props = { image: string };

export const RandomFox = ({ image }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);

    return (
        <img
            ref={node}
            width={320}
            height="auto"
            src={image}
            className="rounded"
        />
    );
};



// Definir los props en react consiste en definir el 
// tipo de dato que va a recibir el componente dentro de un objeto 
// que se le pasa como parametro a la funcion que define el componente
// En este caso el componente RandomFox recibe un objeto de tipo Props

// Tipos para referencias y observadores
// Cuando trabajamos con React y TypeScript, puede que nos encontremos con problemas a la hora de utilizar referencias y observadores en nuestros componentes. Esto se debe a que, dependiendo del objeto HTML con el que estemos trabajando, necesitamos tener en cuenta ciertos conceptos para que nuestro código sea válido.

// Digamos que vamos a nuestro componente RandomFox y queremos añadir una referencia con useRef().

// Incluso si especificamos que la referencia será de tipo HTMLImageElement en el generic de useRef(), el error persiste:

// Para solucionar este problema, debemos inicializar la referencia con un valor nulo en lugar de dejarla sin asignar:


