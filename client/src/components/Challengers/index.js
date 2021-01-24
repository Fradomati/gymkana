import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { TextRichDescription } from "../RichTextArea/index-quill"

// Styles Challengers 
import {
    CounterProof,
    TopTextLittle,
    AddContainer,
    FieldContainer,
    InputAdd,
    InputAll,
    InputOk,
    ButtonNo,
    ButtonStore,
    InputStore,
    DivStored,
    ChallengerContainer,
    Move
} from "./style"

// Styles Global
import { AddButton, OrangeButton, OrangeInput } from "../../globalStyles/buttons"
import { FlexBtwContainer } from "../../globalStyles/containers"

export const Challenger = (props) => {
    const [inputURL, setInputURL] = useState([]);
    const [inputIMG, setInputIMG] = useState([]);
    const [inputEbb_IMG, setInputEbb_IMG] = useState([]);
    const [inputVideo, setInputVideo] = useState([]);
    const [inputClue, setInputClue] = useState([]);
    const [inputCluePre, setInputCluePre] = useState([]);
    const [inputTitle, setInputTitle] = useState();
    const [inputDescription, setInputDescription] = useState();
    const [inputAnswer, setInputAnswer] = useState();
    // Edit fiels - provisional solution
    const [titleEdited, setTitleEdited] = useState();
    const [descriptionEdited, setDescriptionEdited] = useState();
    const [answerEdited, setAnswerEdited] = useState();

    const counter = props.counter + 1;

    const { register, handleSubmit } = useForm({
        mode: "onSubmit"
    });

    /* Comun Functions */
    // Remove element of array
    const remove = (index, state, setState) => {
        let update = [...state];
        update.splice(index, 1);
        setState(update);
    };

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

    // Add Input
    const addInput = (setState, def) => {
        setState((currState) => [...currState, def]);
    };

    /* AGREGAR TÍTULO */
    const defValueTitle = "Introducir Título de la Prueba";
    const addTitle = (data) => {
        const title = data.title;
        setInputTitle(title);
    };

    /* EDITAR TÍTULO */
    const editTitle = (data) => {
        const title = data.title;
        setInputTitle(title);
        setTitleEdited();
    };

    /* AGREGAR DESCRIPCIÓN */
    const defValueDescription = "Introducir Descripción";
    const [storeDes, setStoreDes] = useState(false);
    const addDescription = (data) => {
        const description = data.description;
        setInputDescription(description);
    };

    /* EDITAR TÍTULO */
    // const editDescription = (data) => {
    //     const description = data.description;
    //     setInputDescription(description);
    //     setDescriptionEdited();
    // };

    /* AGREGAR RESPUESTA */
    const defValueAnswer = "Introducir Respuesta";
    const addAnswer = (data) => {
        const answer = data.answer;
        setInputAnswer(answer);
    };

    /* EDITAR TÍTULO */
    const editAnswer = (data) => {
        const answer = data.answer;
        setInputAnswer(answer);
        setAnswerEdited();
    };

    /* AGREGAR URLS */
    const defValueURL = "Introduce URL";

    const addURL = (data) => {
        let update = [...inputURL];
        update[data.id] = data.url;
        setInputURL(update);
    };

    /* AGREGAR IMÁGENES */


    const addIMG = (data) => {
        let update = [...inputIMG];
        update[data.id] = data.img;
        setInputIMG(update);
    };

    /* AGREGAR VÍDEO */
    const defValueVideo = "Introduce URL del vídeo";

    const addVideo = (data) => {
        let update = [...inputVideo];
        update[data.id] = data.video;
        setInputVideo(update);
    };

    /* EMBEBER IMÁGENES */
    const defValueEbb_IMG = "Embeber Imagen";

    const addEbb_IMG = (data) => {
        let update = [...inputEbb_IMG];
        update[data.id] = data.Ebb_img;
        setInputEbb_IMG(update);
    };

    /* AGREGAR PISTAS GRATIS */
    const defValueClue = "Introduce Pista Free";

    const addClue = (data) => {
        let update = [...inputClue];
        update[data.id] = data.clue;
        setInputClue(update);
    };

    /* AGREGAR PISTAS PREMIUM */
    const defValueCluePre = "Introduce Pista Premium";

    const addCluePre = (data) => {
        let update = [...inputCluePre];
        update[data.id] = data.cluePre;
        setInputCluePre(update);
    };

    /* GUARDAR */

    const storeChallenger = () => {
        const values = {
            title: inputTitle,
            description: inputDescription,
            urls: inputURL,
            images: inputIMG,
            imagesEbb: inputEbb_IMG,
            freeClue: inputClue,
            premiumClue: inputCluePre,
            answer: inputAnswer
        };

        console.log(values);
    };

    return (
        <ChallengerContainer>
            <CounterProof>PRUEBA {counter}</CounterProof>
            <TopTextLittle>Agregar Título</TopTextLittle>
            {!inputTitle ? (
                <form onSubmit={handleSubmit(addTitle)}>
                    <InputAll
                        placeholder={defValueTitle}
                        name="title"
                        ref={register({
                            required: false
                        })}
                    />
                    <InputStore type="submit" value="Guardar" />
                </form>
            ) : (
                    <div>
                        {!titleEdited ? (
                            <FlexBtwContainer>
                                <DivStored>{inputTitle}</DivStored>
                                <ButtonStore type="button" onClick={() => setTitleEdited(inputTitle)}>
                                    Editar
                </ButtonStore>
                            </FlexBtwContainer>
                        ) : (
                                <form onSubmit={handleSubmit(editTitle)}>
                                    <InputAll
                                        defaultValue={inputTitle}
                                        name="title"
                                        ref={register({
                                            required: false
                                        })}
                                    />
                                    <InputStore type="submit" value="Guardar" />
                                </form>
                            )}
                    </div>
                )}
            <TopTextLittle>Agregar Descripción</TopTextLittle>
            {storeDes ? (
                <>
                    <TextRichDescription
                        state={inputDescription}
                        setState={setInputDescription}
                    />
                    <button onClick={() => setStoreDes(false)}>Guardar</button>
                </>
            ) : (
                    <>
                        <div dangerouslySetInnerHTML={{ __html: inputDescription }}></div>
                        <button onClick={() => setStoreDes(true)}>+</button>
                    </>
                )}

            <FieldContainer>
                <AddContainer>
                    <TopTextLittle>Agregar URL </TopTextLittle>
                    <AddButton
                        type="button"
                        onClick={() => {
                            addInput(setInputURL, defValueURL);
                        }}
                    >
                        +
                    </AddButton>
                </AddContainer>
            </FieldContainer>
            <ul>
                {inputURL.length != 0 &&
                    inputURL.map((e, i) => {
                        return (
                            <li key={i}>
                                {inputURL[i] != defValueURL ? (
                                    <FlexBtwContainer>
                                        <DivStored>{inputURL[i]}</DivStored>


                                        <ButtonNo
                                            type="button"
                                            onClick={() => {
                                                remove(i, inputURL, setInputURL);
                                            }}
                                        >
                                            ✗
                      </ButtonNo>
                                        <Move onClick={() => position(i, inputURL, setInputURL, -1)}>
                                            <div> +</div>
                                        </Move>
                                        <Move onClick={() => position(i, inputURL, setInputURL, 1)}>
                                            <div> -</div>
                                        </Move>

                                    </FlexBtwContainer>
                                ) : (
                                        <form onSubmit={handleSubmit(addURL)}>
                                            <InputAdd
                                                placeholder={e}
                                                name="url"
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <input
                                                style={{ display: "none" }}
                                                name="id"
                                                defaultValue={i}
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <InputOk type="submit" value="✓" />
                                            <ButtonNo
                                                type="button"
                                                onClick={() => {
                                                    remove(i, inputURL, setInputURL);
                                                }}
                                            >
                                                ✗
                      </ButtonNo>
                                        </form>
                                    )}
                            </li>
                        );
                    })}
            </ul>
            <FieldContainer>
                <TopTextLittle>Agregar Imagen </TopTextLittle>
                <form>
                    <input type="file" />
                    <input type="submit" />
                </form>
            </FieldContainer>

            <FieldContainer>
                <AddContainer>
                    <TopTextLittle>Embeber Imagen </TopTextLittle>
                    <AddButton
                        type="button"
                        onClick={() => {
                            addInput(setInputEbb_IMG, defValueEbb_IMG);
                        }}
                    >
                        +
                </AddButton>
                </AddContainer>
            </FieldContainer>
            <ul>
                {inputEbb_IMG.length != 0 &&
                    inputEbb_IMG.map((e, i) => {
                        return (
                            <li key={i}>
                                {inputEbb_IMG[i] != defValueEbb_IMG ? (
                                    <>
                                        <p>{inputEbb_IMG[i]}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                remove(i, inputEbb_IMG, setInputEbb_IMG);
                                            }}
                                        >
                                            No
                      </button>
                                        <div
                                            onClick={() =>
                                                position(i, inputEbb_IMG, setInputEbb_IMG, -1)
                                            }
                                        >
                                            +
                      </div>
                                        <div
                                            onClick={() =>
                                                position(i, inputEbb_IMG, setInputEbb_IMG, 1)
                                            }
                                        >
                                            -
                      </div>
                                    </>
                                ) : (
                                        <form onSubmit={handleSubmit(addEbb_IMG)}>
                                            <InputAdd
                                                placeholder={e}
                                                name="Ebb_img"
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <input
                                                style={{ display: "none" }}
                                                name="id"
                                                defaultValue={i}
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <InputOk type="submit" value="✓" />
                                            <ButtonNo
                                                type="button"
                                                onClick={() => {
                                                    remove(i, inputEbb_IMG, setInputEbb_IMG);
                                                }}
                                            >
                                                ✗
                      </ButtonNo>
                                        </form>
                                    )}
                            </li>
                        );
                    })}
            </ul>
            <FieldContainer>
                <AddContainer>
                    <TopTextLittle>Embeber Vídeo </TopTextLittle>
                    <AddButton
                        type="button"
                        onClick={() => {
                            addInput(setInputVideo, defValueVideo);
                        }}
                    >
                        +
                    </AddButton>
                </AddContainer>
            </FieldContainer>
            <ul>
                {inputVideo.length != 0 &&
                    inputVideo.map((e, i) => {
                        return (
                            <li key={i}>
                                {inputVideo[i] != defValueVideo ? (
                                    <>
                                        <p>{inputVideo[i]}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                remove(i, inputVideo, setInputVideo);
                                            }}
                                        >
                                            No
                      </button>
                                        <div
                                            onClick={() => position(i, inputVideo, setInputVideo, -1)}
                                        >
                                            +
                      </div>
                                        <div
                                            onClick={() => position(i, inputVideo, setInputVideo, 1)}
                                        >
                                            -
                      </div>
                                    </>
                                ) : (
                                        <form onSubmit={handleSubmit(addVideo)}>
                                            <InputAdd
                                                placeholder={e}
                                                name="video"
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <input
                                                style={{ display: "none" }}
                                                name="id"
                                                defaultValue={i}
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <InputOk type="submit" value="✓" />
                                            <ButtonNo
                                                type="button"
                                                onClick={() => {
                                                    remove(i, inputVideo, setInputVideo);
                                                }}
                                            >
                                                ✗
                      </ButtonNo>
                                        </form>
                                    )}
                            </li>
                        );
                    })}
            </ul>
            <FieldContainer>
                <AddContainer>
                    <TopTextLittle>Agregar Pista Gratis </TopTextLittle>
                    <AddButton
                        type="button"
                        onClick={() => {
                            addInput(setInputClue, defValueClue);
                        }}
                    >
                        +
                     </AddButton>
                </AddContainer>
            </FieldContainer>
            <ul>
                {inputClue.length != 0 &&
                    inputClue.map((e, i) => {
                        return (
                            <li key={i}>
                                {inputClue[i] != defValueClue ? (
                                    <>
                                        <p>{inputClue[i]}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                remove(i, inputClue, setInputClue);
                                            }}
                                        >
                                            No
                      </button>
                                        <div
                                            onClick={() => position(i, inputClue, setInputClue, -1)}
                                        >
                                            +
                      </div>
                                        <div
                                            onClick={() => position(i, inputClue, setInputClue, 1)}
                                        >
                                            -
                      </div>
                                    </>
                                ) : (
                                        <form onSubmit={handleSubmit(addClue)}>
                                            <InputAdd
                                                placeholder={e}
                                                name="clue"
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <input
                                                style={{ display: "none" }}
                                                name="id"
                                                defaultValue={i}
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <InputOk type="submit" value="✓" />
                                            <ButtonNo
                                                type="button"
                                                onClick={() => {
                                                    remove(i, inputClue, setInputClue);
                                                }}
                                            >
                                                ✗
                      </ButtonNo>
                                        </form>
                                    )}
                            </li>
                        );
                    })}
            </ul>
            <FieldContainer>
                <AddContainer>
                    <TopTextLittle>Agregar Pista Premium </TopTextLittle>
                    <AddButton
                        type="button"
                        onClick={() => {
                            addInput(setInputCluePre, defValueCluePre);
                        }}
                    >
                        +
                    </AddButton>
                </AddContainer>
            </FieldContainer>
            <ul>
                {inputCluePre.length != 0 &&
                    inputCluePre.map((e, i) => {
                        return (
                            <li key={i}>
                                {inputCluePre[i] != defValueCluePre ? (
                                    <>
                                        <p>{inputCluePre[i]}</p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                remove(i, inputCluePre, setInputCluePre);
                                            }}
                                        >
                                            No
                      </button>
                                        <div
                                            onClick={() =>
                                                position(i, inputCluePre, setInputCluePre, -1)
                                            }
                                        >
                                            +
                      </div>
                                        <div
                                            onClick={() =>
                                                position(i, inputCluePre, setInputCluePre, 1)
                                            }
                                        >
                                            -
                      </div>
                                    </>
                                ) : (
                                        <form onSubmit={handleSubmit(addCluePre)}>
                                            <InputAdd
                                                placeholder={e}
                                                name="cluePre"
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <input
                                                style={{ display: "none" }}
                                                name="id"
                                                defaultValue={i}
                                                ref={register({
                                                    required: false
                                                })}
                                            />
                                            <InputOk type="submit" value="✓" />
                                            <ButtonNo
                                                type="button"
                                                onClick={() => {
                                                    remove(i, inputCluePre, setInputCluePre);
                                                }}
                                            >
                                                ✗
                      </ButtonNo>
                                        </form>
                                    )}
                            </li>
                        );
                    })}
            </ul>
            <TopTextLittle>Agregar Respuesta</TopTextLittle>
            {!inputAnswer ? (
                <form onSubmit={handleSubmit(addAnswer)}>
                    <InputAll
                        placeholder={defValueAnswer}
                        name="answer"
                        ref={register({
                            required: false
                        })}
                    />
                    <InputStore type="submit" value="Guardar" />
                </form>
            ) : (
                    <div>
                        {!answerEdited ? (
                            <FlexBtwContainer>
                                <DivStored>{inputAnswer}</DivStored>
                                <ButtonStore
                                    type="button"
                                    onClick={() => setAnswerEdited(inputAnswer)}
                                >
                                    Editar
                </ButtonStore>
                            </FlexBtwContainer>
                        ) : (
                                <form onSubmit={handleSubmit(editAnswer)}>
                                    <InputAll
                                        defaultValue={inputAnswer}
                                        name="answer"
                                        ref={register({
                                            required: false
                                        })}
                                    />
                                    <InputStore type="submit" value="Guardar" />
                                </form>
                            )}
                    </div>
                )}
            <button type="button" onClick={() => storeChallenger()}>
                Guardar
        </button>
            <input
                type="button"
                value="Cerrar"
                onClick={() => {
                    props.setAddState(false);
                }}
            />
        </ChallengerContainer>
    );
};
