import React, { useState } from "react";
import { useForm } from "react-hook-form"

// Services
import { createGameFN } from "../../../services/Generator_Service"

// LFG 
import { LFG } from "../../../components/LFG/index"
import { Challenger } from "../../../components/Challengers/index"

// Funtions 
import { counter } from "../../../../lib/Functions/_functions"


export const CreateGame = () => {
    const [game, setGame] = useState()
    const [errorGame, setErrorGame] = useState()
    // Add challegner
    const [addCGER, setAddCGER] = useState(false)

    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    })

    const createGame = async (data) => {
        const response = await createGameFN({
            title: data.title,
            description: data.description,
            category: [data.category],
            tags: [data.tags]
        })

        if (response.status == 200) {
            setGame(response.newGame)
        } else {
            setErrorGame(response.message)
        }
    }

    if (!game) {
        return (
            <>
                <LFG gameState={setGame} />
                <div>Crear nueva Gymkana</div>
                <form onSubmit={handleSubmit(createGame)}>
                    {errorGame && (<div>--¡{errorGame}!--</div>)}
                    <div>Título</div>
                    <input type="text" name="title" ref={register({
                        required: false
                    })} />
                    <div>Descripción</div>
                    <input type="text" name="description" ref={register({
                        required: false
                    })} />
                    <div>Category</div>
                    <select name="category" ref={register({ required: true })}>
                        <option value="freak">Friki</option>
                        <option value="sport">Deporte</option>
                        <option value="fashion">Moda</option>
                    </select>
                    <div>Tags</div>
                    <select name="tags" ref={register({ required: true })}>
                        <option value="lorem1">Lorem1</option>
                        <option value="lorem2">Lorem2</option>
                        <option value="lorem3">Lorem3</option>
                    </select>
                    <input type="submit" />
                </form>
            </>
        )
    } else {
        return (
            <>
                <LFG gameState={setGame} />
                <div>{game.title}</div>
                <div>Número de Pruebas: {counter(game.challengers)}</div>
                <input type="button" value="Añadir Prueba" onClick={() => { setAddCGER(true) }} />
                {addCGER && (
                    <Challenger counter={counter(game.challengers)} setAddState={setAddCGER} />
                )}
            </>
        )
    }
}