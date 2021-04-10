import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form"
import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
// Service
import { getBoard, updateBoard, updateCluesFreeBoard, endGameTime } from "../../services/Board_Service"
import { findChallengerFN } from "../../services/Challenger_Services"
import { passBoardEndToGameRanking } from "../../services/Generator_Service"
// Functions
import { timeToEnd } from "../../../lib/Functions/functions"
// Fail Phrase Function
import { randomPhrase } from "./fail_phrase"
// Loading
import { Loading } from "../../components/Loading/index"
// Styles
import {
    UlProgressBar, LiProgressCirclesDone, LiProgressCirclesCurrent, LiProgressCirclesToDo, Title, DivChallenger,
    CurrentNumber, DivSection, PreDivSection, DivSectionImg, ImgEmbed, DivSectionVideo, VideoIcon, DivStructureVideo,
    DivSectionInfo, DivInfo, MainContent, ClueHide, ClueShow, FormAnswer, InputAnswer, InputButtonAnswer, DivFail,
    DivShowAnswer,
} from "./style"
import { Div70width } from "../../globalStyles/containers"
// Images
import play from "../../../public/images/play.svg"
import enlace from "../../../public/images/enlace.svg"

export const BoardView = (props) => {
    const [board, setBoard] = useState()
    const [challenger, setChallenger] = useState()
    const [challengersDone, setChallengersDone] = useState()
    const [idBoard, setIdBoard] = useState()
    const [fail, setFail] = useState()


    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    });

    // 1º Cojo el ID del Local Storage
    useEffect(() => {
        let id = localStorage.getItem("currentBoard")
        setIdBoard(id)
    }, [])
    // Busco el tablero y lo paso al estado
    useEffect(() => {
        if (idBoard) {
            getBoard(idBoard).then(result => {
                setBoard(result.boardFound)
                currentChallenger(result.boardFound.challengersToDo[0])
            })
        }
    }, [idBoard])
    // Actualización del Challenger Mostrado
    const currentChallenger = async (id) => {
        const response = await findChallengerFN(id)
        setChallenger(response.challengerFound)
        console.log("Challenger actual =>", response)
    }
    // Comprobación de si se muestra o no la respuesta según si ha pasado el challenger o no.
    const showAnswerCheck = (id) => {
        return board.challengersDone.includes(id)
    }
    // Comprobación de la respuesta correcta
    const checkAnswer = (data) => {
        const answer = data.answer
        const correctAnswer = challenger.correct_response
        if (answer == correctAnswer) {
            console.log("RESPUETA CORRECTA!")
            let challengersToDo = board.challengersToDo
            let challengersDone = board.challengersDone
            let removeChallenger = challengersToDo.shift() // Elimino el primer elemento y me lo guardo en la variable
            challengersDone.push(removeChallenger) // Lo envío al array de challengers hechos.
            updateBoard({ id: board._id, challengersToDo, challengersDone }).then(result => {
                if (result.status == 200) {
                    setFail(false)
                    if (result.boardUpdated.challengersToDo[0]) {
                        setBoard(result.boardUpdated)
                        currentChallenger(result.boardUpdated.challengersToDo[0])
                    } else {
                        // END GAME
                        const startGame = result.boardUpdated.startTime
                        const endTime = timeToEnd(startGame)
                        console.log(endTime)
                        const id = result.boardUpdated._id
                        endGameTime({ id, endTime })
                        // Paso ID del Board al ranking del juego
                        passBoardEndToGameRanking({ game_id: result.boardUpdated.game, board_id: id })
                    }
                } else {
                    console.log(result.message)
                }
            })
        } else {
            console.log("Respuesta Incorrecta...")
            setFail(randomPhrase())
        }
    }
    // Comprobación de Pistas Utilizadas
    const showClue = (clue) => {
        return board.cluesUsed.includes(clue)
    }
    // Funcion Usar Pista
    const useFreeClue = (i) => {
        board.cluesUsed.push(challenger.free_clues[i])
        const cluesUsed = board.cluesUsed
        const id = localStorage.getItem("currentBoard")
        updateCluesFreeBoard({ id, cluesUsed }).then(board => setBoard(board.boardUpdated))
    }

    // Burbujas informativas
    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
    } = usePopperTooltip();

    return (
        <>
            {challenger
                ? (
                    <MainContent>
                        {board.challengersToDo.length != 0 ? (
                            <UlProgressBar>
                                {
                                    board.challengersDone.map((e, i) => {
                                        return (
                                            <LiProgressCirclesDone key={i} onClick={() => { currentChallenger(e) }}></LiProgressCirclesDone>
                                        )
                                    })
                                }
                                {
                                    board.challengersToDo.map((e, i) => {
                                        return i == 0 ?
                                            (<LiProgressCirclesCurrent key={i} onClick={() => { currentChallenger(e) }}></LiProgressCirclesCurrent>)
                                            :
                                            (
                                                <LiProgressCirclesToDo key={i}></LiProgressCirclesToDo>
                                            )
                                    })
                                }
                            </UlProgressBar>
                        ) :
                            (<div>Lo lograste!</div>)
                        }
                        <DivChallenger>
                            <Title>{challenger.title}</Title>
                            <DivSectionInfo>
                                <DivInfo ref={setTriggerRef}>i</DivInfo>
                                {visible && (
                                    <div
                                        ref={setTooltipRef}
                                        {...getTooltipProps({ className: 'tooltip-container' })}
                                    >
                                        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                                        Tooltip
                                    </div>
                                )}
                            </DivSectionInfo>
                            <PreDivSection >Descripción:</PreDivSection>
                            <DivSection dangerouslySetInnerHTML={{ __html: challenger.description }} style={{ width: "100%" }}></DivSection>
                            {challenger.images_Embed.length > 0 && (
                                <>
                                    <PreDivSection>Imágenes:</PreDivSection>
                                    <DivSectionImg>
                                        {challenger.images_Embed.map((img, i) => {
                                            return <ImgEmbed key={i} src={img} />
                                        })}
                                    </DivSectionImg>
                                </>
                            )}

                            {challenger.video_Embed.length > 0 && (
                                <>
                                    <PreDivSection>Vídeos:</PreDivSection>
                                    <DivSectionVideo>
                                        {challenger.video_Embed.map((video, i) => {
                                            return (
                                                <DivStructureVideo key={i}>
                                                    <a href={video} target="_blank"><VideoIcon src={play} /></a>
                                                    <div>Vídeo {i + 1}</div>
                                                </DivStructureVideo>
                                            )
                                        })}
                                    </DivSectionVideo>

                                </>
                            )
                            }
                            {challenger.urls.length > 0 && (
                                <>
                                    <PreDivSection>Urls:</PreDivSection>
                                    <DivSectionVideo>
                                        {challenger.urls.map((url, i) => {
                                            return (
                                                <DivStructureVideo key={i}>
                                                    <a href={url} target="_blank"><VideoIcon src={enlace} /></a>
                                                    <div>Enlace {i + 1}</div>
                                                </DivStructureVideo>
                                            )
                                        })}
                                    </DivSectionVideo>

                                </>
                            )
                            }
                            {challenger.free_clues.length > 0 && (
                                <>
                                    <PreDivSection>Pistas Gratis:</PreDivSection>
                                    <ul>
                                        {challenger.free_clues.map((clue, i) => {
                                            return showClue(clue) == true ? (
                                                <ClueShow key={i}>{clue}</ClueShow>
                                            ) : (
                                                    <ClueHide key={i} onClick={() => { useFreeClue(i) }}>Mostrar Pista</ClueHide>
                                                )
                                        })}
                                    </ul>
                                </>
                            )
                            }

                            {
                                showAnswerCheck(challenger._id) == true ?
                                    (
                                        <>
                                            <PreDivSection>Respuesta Correcta:</PreDivSection>
                                            <DivShowAnswer> {challenger.correct_response} </DivShowAnswer>
                                        </>
                                    ) :
                                    (
                                        <FormAnswer onSubmit={handleSubmit(checkAnswer)}>
                                            <PreDivSection>¿Tienes la solución? Introdúcela aquí:</PreDivSection>
                                            {fail && (<DivFail> <b>✘</b> {fail}</DivFail>)}
                                            <InputAnswer name="answer"
                                                ref={register({
                                                    required: false
                                                })} autoComplete="off" placeholder={`La respuesta tiene ${challenger.correct_response.length} caracteres`} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = `La respuesta tiene ${challenger.correct_response.length} caracteres`} />
                                            <InputButtonAnswer type="submit" value="Comprobar" />
                                        </FormAnswer>
                                    )
                            }
                        </DivChallenger>
                    </MainContent>
                )
                : (
                    <Loading />
                )
            }

        </>
    )
}