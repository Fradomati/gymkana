import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Services
import { getAllGamesFN } from '../../services/Generator_Service'
// Components
import { Loading } from '../../components/Loading'
// User Session
import { UserSessionContext } from '../../../lib/Authentication/withAuthentication'
// Styles
import { Li, Description, Title, H2 } from './style'

export const Home = withRouter(({ history }) => {
  const [gamesFound, setGamesFound] = useState()
  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)
  console.log(gamesFound)
  useEffect(() => {
    getAllGamesFN().then((arr) => {
      setGamesFound(arr)
    })
  }, [])

  if (gamesFound) {
    return (
      <div>
        <H2>Títulos Disponibles:</H2>
        <div>
          <ul>
            {gamesFound.map((e, i) => {
              return (
                <Li key={i}>
                  <Link to={`/game/${e.share_url}`}>
                    <Title>{e.title}</Title>
                    <Description>
                      {e.description.slice(0, 75) + '...'}
                    </Description>
                  </Link>
                </Li>
              )
            })}
          </ul>
        </div>
        <div></div>
      </div>
    )
  } else {
    return <Loading />
  }
})
