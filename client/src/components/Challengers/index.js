import React, { useState } from "react";
import { useForm } from "react-hook-form"

export const Challenger = (props) => {
    const [inputURL, setInputUrl] = useState([])


    const counter = props.counter + 1

    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    })

    /* AGREGAR URLS */
    const defValue = "Introduce URL"
    const addInputURL = () => {
        setInputUrl(inputURL => [...inputURL, defValue])
    }

    const addURL = (data) => {
        let update = [...inputURL]
        update[data.id] = data.url
        setInputUrl(update)
    }

    const removeURL = (index) => {
        let update = [...inputURL]
        update.splice(index, 1)
        setInputUrl(update)
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
                            {inputURL[i] != defValue
                                ? (
                                    <>
                                        <p>{inputURL[i]}</p>
                                        <button type="button" onClick={() => { removeURL(i) }}>No</button>
                                    </>
                                )
                                : (
                                    <form onSubmit={handleSubmit(addURL)}>
                                        <input placeholder={e} name="url" ref={register({
                                            required: false
                                        })} />
                                        <input style={{ display: "none" }} name="id" defaultValue={i} ref={register({
                                            required: false
                                        })} />
                                        <input type="submit" /><button type="button" onClick={() => { removeURL(i) }}>No</button>
                                    </form>
                                )}
                        </li>
                    )
                })
                )}
            </ul>
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