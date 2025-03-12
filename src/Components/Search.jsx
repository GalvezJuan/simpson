import { useRef } from "react"

export const Search = ({ search })=> {

    const inputRef = useRef()

    const Boton = () => {
        search (inputRef.current.value);
    }

    return <>
        <input ref={inputRef} type="text" placeholder="Escribi el nombre de tu personaje" />
        <button onClick={Boton} >Buscar</button>
    </>
}