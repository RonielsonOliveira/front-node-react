import { Navegador } from "../../commom/Navegador/Navegador";
import history from "../History/history";
import { Conteudo } from "../PaginaPrincipal/Conteudo";
import { useForm } from "react-hook-form";
import React  from "react";
import axios from "axios";
import { cadastrar } from "../../../api/auth";


function FormularioCadastro(){
    const {register, handleSubmit} = useForm();
    function Click(){
        history.push("/login");

    }
    const onSubmit = (user) => {cadastrar(user).then((response)=>{console.log(response);
      
    }).catch((error)=>{console.log(error);
    })
};
    return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
        Nome: <input name = "nome" type = "text" ref =  {register}/> <br/>
        Email: <input name = "email" type = "text" ref = {register}/> <br/>
        Senha: <input name = "senha" type = "text" ref = {register}/><br/>
        <input type="submit" onClick={Click} />
        

    </form>
   
    );
    
}

export function PaginaFormulario(){
    function Click(){
        history.push("/login");

    }
    return (
        <div>
            <Navegador></Navegador>
           
            <div className="card">
            <FormularioCadastro></FormularioCadastro>
            </div>
        </div>
    )




}