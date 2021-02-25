import React, { useState, useEffect } from "react"

// Styles
import { ParentContainer, ChildContainer, ULContainer, ButtonClose, LiContainer, CustomPositionButtons, UpOption } from "./style"

// Services
import { findChallengerFN, removeChallegenderFN } from "../../services/Challenger_Services"
import { updatePositionsOfChallengersFN } from "../../services/Generator_Service"

// Components 

export const CustomPositionChallenger = (props) => {
    const [titlesCGER, setTitlesCGER] = useState()
    const [idsCGER, setIdsCGER] = useState(props.challengers)
    const [confirmation, setConfirmation] = useState()
    const [areYouSure, setAreYouSure] = useState()


    // Function to get Titles of challengers
    const getTitle = async (id) => {
        const data = await findChallengerFN(id)
        const title = data.challengerFound.title
        return title
    }

    const functionToGetTitles = async () => {
        const titlesArr = idsCGER.map(e => {
            return getTitle(e)
        })
        // I need to use "Promise.all" to get the data from ".map":
        const results = Promise.all(titlesArr)
        return await results
    }

    const updateFunction = () => {
        updatePositionsOfChallengersFN({ gameID: props.gameID, idsCGER }).then(data => {
            props.setGame(data)
            props.setOpenPopupCPC(false)
        })
    }

    // Load the titles in array to show in popup
    useEffect(async () => {
        const data = await functionToGetTitles()
        setTitlesCGER(data)
    }, [idsCGER])

    // Change Position
    const position = (index, state, setState, move) => {
        let update = [...state];
        if (move == -1) {
            if (index == 0) {
                update.push(update[0]);
                update.shift();
                setState(update);
            } else {
                let store = update[index - 1];
                update[index - 1] = update[index];
                update[index] = store;
                setState(update);
            }
        } else if (move == 1) {
            if (index == update.length - 1) {
                update.unshift(update[update.length - 1]);
                update.pop();
                setState(update);
            } else {
                let store = update[index + 1];
                update[index + 1] = update[index];
                update[index] = store;
                setState(update);
            }
        }
    };

    // Remove Challenger

    const remove = async (id, i, setState) => {

        const [...newArray] = idsCGER;
        newArray.splice(i, 1)
        const response = await removeChallegenderFN(id)
        response.status == 200 ? setState(newArray) : console.log("Algo ha salido mal")
        setAreYouSure(false)
    }

    return (
        <ParentContainer>
            <ChildContainer>
                <ButtonClose type="button" onClick={() => { updateFunction() }}>X</ButtonClose>
                <ULContainer>
                    {titlesCGER && (
                        <>
                            {titlesCGER.map((e, i) => {
                                return (<LiContainer key={i}>
                                    {i + 1} - {e}
                                    <CustomPositionButtons>
                                        <UpOption onClick={() => position(i, idsCGER, setIdsCGER, -1)}>+</UpOption>
                                        <UpOption onClick={() => position(i, idsCGER, setIdsCGER, +1)}>-</UpOption>
                                        {
                                            areYouSure
                                                ? (<UpOption onClick={() => remove(idsCGER[i], i, setIdsCGER)}>x</UpOption>)
                                                : (<UpOption onClick={() => setAreYouSure(true)}>?</UpOption>)
                                        }
                                    </CustomPositionButtons>

                                </LiContainer>)
                            })}
                        </>
                    )}
                </ULContainer>
            </ChildContainer>
        </ParentContainer>
    )
}