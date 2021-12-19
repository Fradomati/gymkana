import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, withRouter } from 'react-router-dom'
import { loginFn } from '../../../services/Auth_Service'

// Styles
import {
  ContainerGlobal,
  ContainerPreForm,
  ContainerForm,
  InputAuth,
  NavAuth,
  ModuleAuth,
  Title,
  Submit,
  DivShowPassword,
} from '../styles'

// Basic Functions
import { showPass } from '../../../../lib/Functions/_functions'

// User Session
import { UserSessionContext } from '../../../../lib/Authentication/withAuthentication'

export const Login = withRouter(({ history }) => {
  const [userLoaded, setUserLoaded] = useContext(UserSessionContext)
  const [typePassword, setTypePassword] = useState('password')
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  })
  let temporalEmail
  let temporalPass
  // Fast login after signup
 if(localStorage.getItem('temporalEmail')&& localStorage.getItem('temporalPass')) {
    temporalEmail = localStorage.getItem('temporalEmail') 
    temporalPass = localStorage.getItem('temporalPass')
  }


  const onSubmit = async (data) => {
    const responseServer = await loginFn(data) 

    if (responseServer.status == 417) {
      setErr(responseServer.message)
    } else {
      console.log('Logged')
      // Es necesario? O simplemente llevándolo a "/" con el authentificator bastaría?
      // setUserLoaded(responseServer)
      // Clean Fast Login
      localStorage.removeItem('temporalEmail')
      localStorage.removeItem('temporalPass')
      // Session
      localStorage.setItem('userSession', true)
      history.push('/')
    }
  }
  // Show the password into the input
  const showPassword = () => {
    setTypePassword(showPass(typePassword))
  }

  return (
    <ContainerGlobal>
      <ContainerPreForm className="form-login">
        <NavAuth>
          <ModuleAuth className="nav-left"></ModuleAuth>
          <ModuleAuth>
            <Link style={{ marginRight: '0.8em' }} to="/signup">
              Registro
            </Link>
          </ModuleAuth>
        </NavAuth>
        <ContainerForm>
          <Title>Iniciar Sesión</Title>
        </ContainerForm>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          {/* {err && (<P>{err}</P>)} */}
          <InputAuth
            type="text"
            placeholder="Email"
            name="mail"
            autoComplete="off"
            defaultValue = {temporalEmail}
            ref={register({
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
            })}
          />

          <InputAuth
            type="text"
            placeholder="Contraseña"
            name="password"
            autoComplete="off"
            defaultValue={temporalPass}
            type={typePassword}
            ref={register({
              required: true,
              min: 8,
            })}
          />
          <DivShowPassword>
            <input type="checkbox" onClick={showPassword} /> Ver contraseña
          </DivShowPassword>
          <Submit type="submit" />
          <Link to="/#">
            <span>¿Has olvidado la contraseña?</span>
          </Link>
        </ContainerForm>
      </ContainerPreForm>
    </ContainerGlobal>
  )
})
