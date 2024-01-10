import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

type LazyImagesProps = { image: string};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImagesProps & ImageNative

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null);
    const [currentSrc, setSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      );

    useEffect(() => {
        // a new observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // On intersection console log
                    if (!entry.isIntersecting || !node.current) {
                        return;
                      }
              
                      setSrc(currentSrc);
                    });
                  });

        // disconnect
        return () => {
            observer.disconnect();
        };
    }, [image]);

    return (
        <div style={{ margin: 20 }}>
            <img
                ref={node}
                width={320}
                height="auto"
                src={currentSrc}
                className="rounded bg-gray-200"
                {...imgProps}
            />
        </div>
    );
};


   




// Definir los props en react consiste en definir el 
// tipo de dato que va a recibir el componente dentro de un objeto 
// que se le pasa como parametro a la funcion que define el componente
// En este caso el componente LazyImage recibe un objeto de tipo Props

// Tipos para referencias y observadores
// Cuando trabajamos con React y TypeScript, puede que nos encontremos con problemas a la hora de utilizar referencias y observadores en nuestros componentes. Esto se debe a que, dependiendo del objeto HTML con el que estemos trabajando, necesitamos tener en cuenta ciertos conceptos para que nuestro código sea válido.

// Digamos que vamos a nuestro componente RandomFox y queremos añadir una referencia con useRef().

// Incluso si especificamos que la referencia será de tipo HTMLImageElement en el generic de useRef(), el error persiste:

// Para solucionar este problema, debemos inicializar la referencia con un valor nulo en lugar de dejarla sin asignar:


