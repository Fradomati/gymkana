import React, { useState } from "react";
import { useForm } from "react-hook-form"

export const Challenger = (props) => {
    const [inputURL, setInputUrl] = useState([])


    const counter = props.counter + 1

    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    })

    /* AGREGAR URLS */
    const addInputURL = () => {
        setInputUrl(inputURL => [...inputURL, "Introduce URL"])
    }

    const addURL = (data) => {
        data.URL
    }



    return (
        <>
            <h1>Prueba: {counter}</h1>
            <p>Agregar Título</p>
            <p>Agregar Descripción</p>
            <div>URL <button type="button" onClick={() => { addInputURL() }}>+</button></div>
            <ul>
                {inputURL.length != 0 && (inputURL.map((e, i) => {
                    return (
                        <li key={i}>
                            <form onSubmit={handleSubmit(addURL)}>
                                <input placeholder={e} />
                                <input type="submit" /><p>No</p>
                            </form>
                        </li>
                    )
                })
                )}
            </ul>
            <p>Agregar URL 2</p>
            <p>Agregar Imagen</p>
            <p>Embeber Imágen</p>
            <p>Embeber Vídeo</p>
            <p>Agregar Pista Gratis</p>
            <p>Agregar Pista Premium</p>
            <p>Agregar Respuesta</p>
            <input type="button" value="Cerrar" onClick={() => { props.setAddState(false) }} />

        </>
    )
}