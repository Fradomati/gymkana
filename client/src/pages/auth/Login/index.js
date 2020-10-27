import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

// Styles
import { ContainerGlobal, ContainerPreForm, ContainerForm, InputAuth } from "../styles"


export const Login = () => {

    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );

    const onSubmit = (data) => {
        console.log(data)
    }

    // const onSubmit = async (data) => {
    //     const responseServer = await loginFn(data);

    //     if (responseServer.status == 417) {
    //         setErr(responseServer.message)
    //     } else {
    //         setUserOn(responseServer)
    //         localStorage.setItem("sessionOn", true)
    //         history.push("/")
    //     }
    // };

    return (
        <ContainerGlobal>
            <ContainerPreForm>
                <p>Iniciar Sesión</p>
                <Link to="/signup">Registro</Link>
                <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                    <h2>Iniciar Sesión</h2>
                    {/* {err && (<P>{err}</P>)} */}
                    <InputAuth type="text" placeholder="Email" name="mail" ref={register({
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                    })} />

                    <InputAuth type="text" placeholder="Contraseña" name="password" ref={register({
                        required: true, min: 8,
                    })} />

                    <input type="submit" />
                    <Link to="/#"><span>¿Has olvidado la contraseña?</span></Link>
                </ContainerForm>
            </ContainerPreForm>
        </ContainerGlobal>
    )
}