import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../App";
import "./Navegador.css";
function NavegadorLogado({nome}){
    const {setAuth} = useContext(AuthContext);
    return(
        <nav className="navegador">
            <NavLink exact className="link-navegador" to="/">Home</NavLink>
            <NavLink className="link-navegador" to="/postar">Fazer Post</NavLink>
            <div className="link-navegador" style={{"marginLeft":"auto"}} onClick={()=>{setAuth({token:null,nome:null})}}> Logout</div>
            <div className="link-navegador" style={{"marginLeft":"auto"}}>  
                {nome}
            </div>
         </nav>
    )

}
function NavegadorNaoLogado(){
   
    return(
        <nav className="navegador">
            <NavLink exact className="link-navegador" to="/">Home</NavLink>
            <NavLink className="link-navegador" to="/cadastro">Fazer Cadastro</NavLink>
            <NavLink className="link-navegador" to="/login">Login</NavLink>
            

        
            
 
        
         </nav>
    )

}
export function Navegador(){
    let MeuLink = ({linkTexto}) => (<Link className="link-navegador" to="/postar">{linkTexto}</Link>);
    const {auth} = useContext(AuthContext);
    return(
        <div>
            {auth.token == null? 
                <NavegadorNaoLogado></NavegadorNaoLogado>: 
                <NavegadorLogado nome={auth.nome}></NavegadorLogado> 
            }


        </div>
        
            
    
            
      
            

        
            
 
        
       
    )
}