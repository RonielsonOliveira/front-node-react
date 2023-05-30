import { Navegador } from "../../commom/Navegador/Navegador";
import { Conteudo } from "./Conteudo";
import "./paginaprincipal.css"
import {useContext, useEffect, useState} from 'react';
import { PaginaPostar } from "../PaginaPostar/PaginaPost";
import { useForm } from "react-hook-form";
import { listarPosts } from "../../../api/postsAPI";
import { AuthContext } from "../../../App";

function Cabecalho(props ){
     return(<header className= "navegador">
                <h1 className= "logo">Social Post</h1>
                <button  className="button">Linha do tempo</button>
                <button className="button">Postar</button>
            
            </header>
     )
}
function FormularioPost({onSubmeter}){
    const {register, handleSubmit} = useForm();
    const submeter = (post) => {onSubmeter(post)};
   


    return (
            <div className="card">
            <form onSubmit={handleSubmit(submeter)}>
                
                <input type="text" className="comentarioPost" name="conteudo" placeholder= "Escreva sua mensagem" ref={register}/>
                <input type="text" name="likes" value={"0"} ref={register} hidden></input>
              
                <button>postar</button>
            </form>
            </div>



      
    )
}
export function ListarPosts({posts}){
    return(
        <ul>
            {posts.map((post)=>(<li>{post.conteudo} - {post.likes}</li>))}
        </ul>
    )
}
function Botao(){
    const [count, setCount] = useState(0);
    const [clicado, setClicado] = useState(false);
    console.log(count, clicado)
    const clicoubotao = ()=>{
        setCount(count+1);
        setClicado(true);
    } 
    let estilo = {};
    if(clicado == true){
        estilo["backgroundColor"] = "green";
    }else{
        estilo["backgroundColor"] = "blue";

    }
    console.log(estilo)
    return <button onClick={clicoubotao} style={estilo}>Eu fui pressionado {count} vezes</button>
}
export function PaginaPrincipal(){
    const {auth} = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        listarPosts(auth.token).then(
            (response) => {
                setPosts(response.data);
            
            }
            ).catch(
                (error =>{
                    console.log(error);
                })
            )
    },[]);

    return (
    <div>
        <Navegador></Navegador>     
        <PaginaPostar></PaginaPostar>
        
        </div>
    )
}