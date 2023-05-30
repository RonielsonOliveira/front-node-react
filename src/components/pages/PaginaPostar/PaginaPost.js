import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { inserirPost, listarPosts } from "../../../api/postsAPI";
import { AuthContext } from "../../../App";
import { Navegador } from "../../commom/Navegador/Navegador";
import history from "../History/history";
import { Conteudo } from "../PaginaPrincipal/Conteudo";
import { PaginaPrincipal } from "../PaginaPrincipal/PaginaPrincipal";


function FormularioPostar({onSubmeter}){
    const {register, handleSubmit} = useForm();
    const submeter = (post) =>{onSubmeter(post)};


    function Click(){
        history.push("/");

    }
    return(
        <form onSubmit={handleSubmit(submeter)}>

            <div className="card">
            <form >
                <label>
                <input type="text" className="comentarioPost" name="comment" placeholder= "Escreva sua mensagem" ref={register}/>
               </label>
               <input type="submit" onClick={Click} />
            </form>
            </div>
    





            </form>

    )

        
}

export function PaginaListar(){
    const [posts, setPosts] = useState([]);
    const {auth} = useContext(AuthContext);
 

    useEffect(()=>{
        console.log(auth.token)
        listarPosts(auth.token).then(
            (response)=>{
                setPosts(response.data)
            }
        ).catch((error)=> {
            console.log(error);
        })
    },[])

}

export function PaginaPostar(){
    const [posts, setPosts] = useState([]);
    const {auth} = useContext(AuthContext);
 

    useEffect(()=>{
        console.log(auth.token)
        listarPosts(auth.token).then(
            (response)=>{
                setPosts(response.data)
            }
        ).catch((error)=> {
            console.log(error);
        })
    },[])
    const adicionarPost = (post) =>{
        inserirPost(auth.token, post).then(
            (response)=> {
                console.log(response);
            }
        ).catch((error)=>{
            console.log(error);
        })
    };
    


    
    return (
        <div>
            <Navegador></Navegador>
            <FormularioPostar PaginaListar></FormularioPostar>
           
            
        </div>
    )




}