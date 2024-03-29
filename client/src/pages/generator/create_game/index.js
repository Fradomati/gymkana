import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"

// Services
import { createGameFN } from "../../../services/Generator_Service"

// Styles Create_Game
import {
    TitlePage,
    TitleSections,
    TopText,
    ContainerForm,
    Input,
    Select,
    SelectContainer,
    UlChallengerList,
    LiChallengerListElement,
    ThreePartsContainers
} from "./style"

// Styles Global
import { LeftFlexContainer, CenterFlexContainer, SpaceOne, FlexBtwContainer, Margin2emTB } from "../../../globalStyles/containers"
import { OrangeInput, AddButton, OrangeButton } from "../../../globalStyles/buttons"

// Components
import { LFG } from "../../../components/LFG/index"
import { Challenger } from "../../../components/Challengers/index"
import { CustomPositionChallenger } from "../../../components/CustomPositionChallengers/index"

// Funtions 
import { counter } from "../../../../lib/Functions/_functions"



export const CreateGame = () => {
    const [game, setGame] = useState()
    const [errorGame, setErrorGame] = useState()
    // Add challenger
    const [addCGER, setAddCGER] = useState(false)
    // Popup Custom Position Challenger (CPC)
    const [openPopupCPC, setOpenPopupCPC] = useState(false)

    // Modify challenger state, if clic on someone I pass the ID of challenger to component Challengers
    const [challengerSelected, setChallengerSelected] = useState()

    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    })

    const createGame = async (data) => {
        const response = await createGameFN({
            title: data.title,
            description: data.description,
            share_url: data.url,
            category: [data.category],
            tags: [data.tags]
        })

        if (response.status == 200) {
            setGame(response.newGame)
        } else {
            setErrorGame(response.message)
        }
    }

    useEffect(() => {
        setAddCGER(false)
    }, [game])

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
                        <TopText>URL</TopText>
                        <Input type="text" name="url" ref={register({
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
                {openPopupCPC && (<CustomPositionChallenger
                    challengers={game.challengers}
                    setOpenPopupCPC={setOpenPopupCPC}
                    gameID={game._id}
                    setGame={setGame} />)}
                <LFG gameState={setGame} />
                <TitlePage>{game.title}</TitlePage>
                <Margin2emTB>
                    <FlexBtwContainer>
                        <ThreePartsContainers>
                            <TitleSections>CATEGORIAS</TitleSections>
                            {game.category.map((e, i) => {
                                return (
                                    <div key={i}>{e}</div>
                                )
                            })} </ThreePartsContainers>
                        <ThreePartsContainers>
                            <TitleSections>ETIQUETAS</TitleSections>
                            {game.tags.map((e, i) => {
                                return (
                                    <div key={i}>{e}</div>
                                )
                            })} </ThreePartsContainers>
                        <ThreePartsContainers>
                            <TitleSections>OTROS</TitleSections>
                            <div>Lorem</div>
                        </ThreePartsContainers>
                    </FlexBtwContainer>
                </Margin2emTB>
                <TitleSections>Pruebas</TitleSections>
                <UlChallengerList>
                    {
                        game.challengers.map((e, i) => {
                            return (
                                <LiChallengerListElement key={i} onClick={() => { setChallengerSelected(e), setAddCGER(true) }}>{i + 1}</LiChallengerListElement>
                            )
                        })
                    }
                </UlChallengerList>
                <OrangeButton type="button" onClick={() => { setOpenPopupCPC(true) }}>Ordenar Pruebas</OrangeButton>

                <OrangeButton type="button" onClick={() => { setChallengerSelected(false), setAddCGER(true) }}>Añadir Prueba</OrangeButton>
                {addCGER && (
                    <ContainerForm>
                        <Challenger
                            counter={counter(game.challengers)}
                            setChallengerState={setAddCGER}
                            setGameState={setGame}
                            id={game._id}
                            modifyChallenger={challengerSelected}
                            setChallengerSelectedState={setChallengerSelected} />
                    </ContainerForm>
                )}
            </>
        )
    }
}