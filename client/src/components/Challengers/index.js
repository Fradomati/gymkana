import React from "react"

export const Challenger = (props) => {


    const counter = props.counter + 1


    return (
        <>
            <h1>Prueba: {counter}</h1>
            <input type="button" value="Cerrar" onClick={() => { props.setAddState(false) }} />

        </>
    )
}