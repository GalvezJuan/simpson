import { useState, useEffect } from "react";

export const Peticion = ({ pet }) => {
    const [personaje, setPersonaje] = useState([]);
    const [personajeBuscado, setPersonajeBuscado] = useState(null);

    const Simpsons = async () => {
        let response = await fetch("https://api.sampleapis.com/simpsons/characters");
        let data = await response.json();
        const personajesAleatorios = data.sort(() => Math.random() - 0.5);
        setPersonaje(data.slice(0, 3));

        if (pet) {
            const encontrado = data.find(p => p.name.toLowerCase() === pet.toLowerCase());
            setPersonajeBuscado(encontrado);
        } else {
            
            setPersonaje(personajesAleatorios.slice(0, 3));
        }
    };

    useEffect(() => {
        Simpsons();
    }, [pet]);

    return (
        <>
            {personajeBuscado ? (
                <ul>
                    <li key={personajeBuscado.id}>
                        <h3>{personajeBuscado.name}</h3>
                        <img src={personajeBuscado.image} alt={personajeBuscado.name} width="100" />
                    </li>
                </ul>
            ) : (
                personaje.length === 0 ? (
                    <p>Cargando personajes...</p>
                ) : (
                    <ul>
                        {personaje.map((element) => (
                            <li key={element.id}>
                                <h3>{element.name}</h3>
                                <img src={element.image} alt={element.name} width="100" />
                            </li>
                        ))}
                    </ul>
                )
            )}
        </>
    );
};
