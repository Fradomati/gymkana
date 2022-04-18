import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, withRouter } from 'react-router-dom'
import { signupFn } from '../../../services/Auth_Service'

// Styles
import {
  ContainerGlobal,
  ContainerPreForm,
  ContainerForm,
  InputAuth,
  NavAuth,
  ModuleAuth,
  ErrorTxt,
  Title,
  Submit,
  DivShowPassword,
} from '../styles'

// Basic Functions
import { showPass } from '../../../../lib/Functions/_functions'

export const Signup = withRouter(({ history }) => {
  const [typePassword, setTypePassword] = useState('password')
  const [err, setErr] = useState()
  const { register, handleSubmit, errors } = useForm({
    mode: 'onSubmit',
  })
  const onSubmit = async (data) => {
    const responseServer = await signupFn(data)

    if (responseServer.status == 417) {
      setErr(responseServer.message)
    } else {
      console.log(responseServer)
      localStorage.setItem('temporalEmail', responseServer.email)
      localStorage.setItem('temporalPass', responseServer.password)
      console.log('Registrado!')
      history.push('/login')
    }
  }
  // Show the password into the input
  const showPassword = () => {
    setTypePassword(showPass(typePassword))
  }

  if (errors.password) {
    console.log('Error', errors)
  }
  return (
    <ContainerGlobal>
      <ContainerPreForm className="form-signup">
        <NavAuth>
          <ModuleAuth className="nav-left"></ModuleAuth>
          <ModuleAuth>
            <Link style={{ marginRight: '0.8em' }} to="/login">
              Iniciar Sesión
            </Link>
          </ModuleAuth>
        </NavAuth>
        <ContainerForm>
          <Title>Registro</Title>
        </ContainerForm>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
          <InputAuth
            type="text"
            placeholder="Email"
            name="mail"
            autoComplete="off"
            ref={register({
              required: true,
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: 'El formato de email es incorrecto',
              },
            })}
          />

          <InputAuth
            type="text"
            placeholder="Contraseña"
            name="password"
            autoComplete="off"
            type={typePassword}
            ref={register({
              required: true,
              min: 8,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                message: 'Mínimo 8 caracteres con al menos 1 letra y número',
              },
            })}
          />
          <DivShowPassword>
            <input type="checkbox" onClick={showPassword} /> Ver contraseña
          </DivShowPassword>
          <Submit type="submit" />
          {errors?.mail?.message && (
            <ErrorTxt>Mail: {errors?.mail?.message}</ErrorTxt>
          )}
          {errors?.password?.message && (
            <ErrorTxt>Contraseña: {errors?.password?.message}</ErrorTxt>
          )}
          {err && (
            <div>
              {err}
              <a href="/login"> ¿Iniciar Sesión?</a>
            </div>
          )}
        </ContainerForm>
      </ContainerPreForm>
    </ContainerGlobal>
  )
})
