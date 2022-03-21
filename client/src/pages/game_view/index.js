import React, { useState, useEffect, useContext } from 'react'
import { withRouter } from 'react-router-dom'

// Service
import { getGameFN } from '../../services/Generator_Service'
import { createBoard } from '../../services/Board_Service'
// User Context
import { UserSessionContext } from '../../../lib/Authentication/withAuthentication'

// Components
import { Loading } from '../../components/Loading/index'
// Styles
import {
  CenterMiddleCointaner,
  CenterFlexContainer,
  FlexBtwContainer,
  SpaceOne,
} from '../../globalStyles/containers'
import { OrangeButton, OrangeInput } from '../../globalStyles/buttons'
import { GreyContainer, TitleDiv, DescriptionDiv } from './style'

export const GameView = withRouter(({ match, history }) => {
  const share_url = match.params.share_url
  const [game, setGame] = useState()
  const context = useContext(UserSessionContext)
  const user = context[0]
  const userID = user._id

  useEffect(() => {
    getGameFN({ share_url }).then((result) => {
      setGame(result.game)
    })
  }, [])

  const crearTablero = (game_id, challengers) => {
    createBoard({ game_id, challengers, userID }).then((result) => {
      console.log(result)
      if (result.status == 200) {
        history.push(`/board/${game.title}`)
        localStorage.setItem('currentBoard', result.newBoard._id)
      }
    })
  }
  console.log(game)

  return (
    <>
      {game ? (
        <CenterMiddleCointaner>
          <GreyContainer>
            <TitleDiv>{game.title}</TitleDiv>
            <DescriptionDiv>{game.description}</DescriptionDiv>
            <FlexBtwContainer>
              <div>{game.tags[0]}</div>
              <div>{game.category[0]}</div>
              <div>{game.challengers.length}</div>
            </FlexBtwContainer>
            <SpaceOne />
            <CenterFlexContainer>
              {!user ? (
                <OrangeButton onClick={() => history.push('/login')}>
                  ¡Inicia Sesión y Prueba!
                </OrangeButton>
              ) : (
                <OrangeButton
                  onClick={() => {
                    crearTablero(game._id, game.challengers)
                  }}
                >
                  Iniciar Gymkana
                </OrangeButton>
              )}
            </CenterFlexContainer>
          </GreyContainer>
        </CenterMiddleCointaner>
      ) : (
        <Loading />
      )}
    </>
  )
})
