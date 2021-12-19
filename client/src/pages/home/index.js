import React, { useState, useEffect, useContext } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Services
import { getAllGamesFN } from '../../services/Generator_Service'
// Components
import { Loading } from '../../components/Loading'
// User Session
import { UserSessionContext } from '../../../lib/Authentication/withAuthentication'

export const Home = withRouter(({ history }) => {
  const [gamesFound, setGamesFound] = useState()
  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)
  console.log('USER', userLoaded)
  useEffect(() => {
    getAllGamesFN().then((arr) => {
      setGamesFound(arr)
    })
  }, [])

  if (gamesFound) {
    return (
      <>
        <ul>
          {gamesFound.map((e, i) => {
            return (
              <li key={i}>
                <Link to={`/game/${e.share_url}`}>{e.title}</Link>
              </li>
            )
          })}
        </ul>
      </>
    )
  } else {
    return <Loading />
  }
})
