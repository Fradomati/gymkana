import React from "react";
import { useForm } from "react-hook-form"

// Services
import { createGameFN } from "../../../services/Generator_Service"




export const CreateGame = () => {

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

        console.log(`Se ha creado ${response}`)
    }

    return (
        <>
            <div>Crear nueva Gymkana</div>
            <form onSubmit={handleSubmit(createGame)}>
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
}