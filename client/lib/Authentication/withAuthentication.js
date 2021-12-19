import React, { useState, useEffect, createContext } from 'react'
// Services
import { whoameFN } from '../../src/services/Auth_Service'
// Components
import { Loading } from '../../src/components/Loading/index'

export const UserSessionContext = createContext()

export const withAuthentication = (Component) => () => {
  const [loading, setLoading] = useState(true)
  const [userLoaded, setUserLoaded] = useState()

  useEffect(() => {
    whoameFN()
      .then((user) => {
        setUserLoaded(user)
      })
      .catch((e) => {
        setUserLoaded(false)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <UserSessionContext.Provider value={[userLoaded, setUserLoaded]}>
      {loading ? <Loading /> : <Component />}
    </UserSessionContext.Provider>
  )
}
