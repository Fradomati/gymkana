import React, {useState} from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { loginFn } from "../../../services/Auth_Service"

// Styles
import { ContainerGlobal, ContainerPreForm, ContainerForm, InputAuth, NavAuth, ModuleAuth, Title, Submit, DivShowPassword } from "../styles"

// Basic Functions
import { showPass } from "../../../../lib/Functions/_functions"

export const Login = () => {
    const [typePassword, setTypePassword] = useState("password")
    const { register, handleSubmit, errors } = useForm(
        {
            mode: "onSubmit"
        }
    );
    const onSubmit = async (data) => {
        const responseServer = await loginFn(data);

        if (responseServer.status == 417) {
            setErr(responseServer.message)
        } else {

            console.log("Logged")
            // setUserOn(responseServer)
            // localStorage.setItem("sessionOn", true)
            // history.push("/")
        }
    };
    // Show the password into the input
    const showPassword = () => {
        setTypePassword(showPass(typePassword))
   }

    return (
        <ContainerGlobal>
            <ContainerPreForm className="form-login">
                <NavAuth>
                    <ModuleAuth className="nav-left">
                    </ModuleAuth>
                    <ModuleAuth>
                        <Link style={{marginRight: "0.8em"}} to="/signup">Registro</Link>
                    </ModuleAuth>
                </NavAuth>
                <ContainerForm>
                    <Title>Iniciar Sesión</Title>
                </ContainerForm>
                <ContainerForm onSubmit={handleSubmit(onSubmit)}>
                    {/* {err && (<P>{err}</P>)} */}
                    <InputAuth type="text" placeholder="Email" name="mail" autoComplete="off" ref={register({
                        required: true,
                        pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i
                    })} />

                    <InputAuth type="text" placeholder="Contraseña" name="password" autoComplete="off"  type={typePassword} ref={register({
                        required: true, min: 8,
                    })} />
                    <DivShowPassword><input type="checkbox" onClick={showPassword}/> Ver contraseña</DivShowPassword>
                    <Submit type="submit" />
                    <Link to="/#"><span>¿Has olvidado la contraseña?</span></Link>
                </ContainerForm>
            </ContainerPreForm>
        </ContainerGlobal>
    )
}