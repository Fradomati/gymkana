import React, { useState } from "react";
import { useForm } from "react-hook-form"

// Services
import { createGameFN } from "../../../services/Generator_Service"

// Styles Create_Game
import { TitlePage, TopText, ContainerForm, Input, Select, SelectContainer } from "./style"

// Styles Global
import { LeftFlexContainer, CenterFlexContainer, SpaceOne } from "../../../globalStyles/containers"
import { OrangeInput } from "../../../globalStyles/buttons"

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
                <TitlePage>Crear nueva Gymkana</TitlePage>
                <ContainerForm>
                    <form onSubmit={handleSubmit(createGame)}>
                        {errorGame && (<div>--¡{errorGame}!--</div>)}
                        <TopText>Título</TopText>
                        <Input type="text" name="title" ref={register({
                            required: false
                        })} />
                        <TopText>Descripción</TopText>
                        <Input type="text" name="description" ref={register({
                            required: false
                        })} />
                        <LeftFlexContainer>
                            <SelectContainer>
                                <TopText>Category</TopText>
                                <Select name="category" ref={register({ required: true })}>
                                    <option value="freak">Friki</option>
                                    <option value="sport">Deporte</option>
                                    <option value="fashion">Moda</option>
                                </Select>
                            </SelectContainer>
                            <SelectContainer>
                                <TopText>Tags</TopText>
                                <Select name="tags" ref={register({ required: true })}>
                                    <option value="lorem1">Lorem1</option>
                                    <option value="lorem2">Lorem2</option>
                                    <option value="lorem3">Lorem3</option>
                                </Select>
                            </SelectContainer>
                        </LeftFlexContainer>
                        <SpaceOne></SpaceOne>
                        <CenterFlexContainer>
                            <OrangeInput value="Guardar" type="submit" />
                        </CenterFlexContainer>
                    </form>
                </ContainerForm>

            </>
        )
    } else {
        return (
            <>
                <LFG gameState={setGame} />
                <TitlePage>{game.title}</TitlePage>
                <div>Número de Pruebas: {counter(game.challengers)}</div>
                <input type="button" value="Añadir Prueba" onClick={() => { setAddCGER(true) }} />
                {addCGER && (
                    <ContainerForm>
                        <Challenger counter={counter(game.challengers)} setAddState={setAddCGER} />
                    </ContainerForm>
                )}
            </>
        )
    }
}