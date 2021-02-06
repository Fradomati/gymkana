import React, { useState, useEffect } from "react"

// Styles
import { ParentContainer, ChildContainer } from "./style"

// Services
import { findChallengerFN } from "../../services/Challenger_Services"

export const CustomPositionChallenger = (props) => {
    const [titlesCGER, setTitlesCGER] = useState()
    const [idsCGER, setIdsCGER] = useState(props.challengers)

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

    return (
        <ParentContainer>
            <ChildContainer>
                <ul>
                    {titlesCGER && (
                        <>
                            {titlesCGER.map((e, i) => {
                                return (<li key={i}>
                                    <div>
                                        {e}
                                        <div onClick={() => position(i, idsCGER, setIdsCGER, -1)}>+</div>
                                        <div onClick={() => position(i, idsCGER, setIdsCGER, +1)}>-</div>
                                    </div>
                                </li>)
                            })}
                        </>
                    )}
                </ul>
                <button type="button" onClick={() => { props.setOpenPopupCPC(false) }}>Cerrar</button>
            </ChildContainer>
        </ParentContainer>
    )
}