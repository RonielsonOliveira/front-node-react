import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { login } from "../../../api/auth";
import { AuthContext } from "../../../App";
import { Navegador } from "../../commom/Navegador/Navegador";
import history from "../History/history";
import { PaginaPostar } from "../PaginaPostar/PaginaPost";
export function FormularioLogin(){
    const {register,handleSubmit} = useForm ();
    const auth = useContext(AuthContext);
    console.log(auth);
    const submeter = (login_data) =>{
        login(login_data).then((response)=>{
           auth.setAuth({token: response.data.token, nome: response.data.nome});
           history.push("/");
        }).catch((error)=>{
            console.log(error);
        })
    }
    function Click(){
        history.push("/");

    }

    return(
    <form onSubmit={handleSubmit(submeter)}>
       Email:<input type="text" name="email" ref={register}></input> <br/>
       Senha:<input type="password" name="senha" ref={register}></input> <br/>
       <button type="submit" onClick={Click} class= "buttonPost">Fazer Login</button> <br/>
    </form>
    )
}

export function PaginaLogin(){
    return(
        <div>
            <Navegador></Navegador>
            <div className="card">
            <FormularioLogin></FormularioLogin>
            </div>
        </div>
    )
}