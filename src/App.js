import logo from './logo.svg';
import './App.css';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import history from './components/pages/History/history';
import  {PaginaPostar} from './components/pages/PaginaPostar/PaginaPost';
import {PaginaFormulario} from './components/pages/PaginaFormulario/PaginaFormulario';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';

export const AuthContext = createContext (null);



function App() {
  const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});

  const setAuthLS = (newAuth) =>{
    setAuth(newAuth);
    localStorage.setItem("token",newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }
  return (
    <AuthContext.Provider value={{auth:auth, setAuth: setAuthLS}}>
    <Router history = {history}>
 
      <Route exact path ="/"><PaginaPrincipal></PaginaPrincipal>
          {auth.token ==null? <Redirect to = "/login"></Redirect>:<PaginaPrincipal></PaginaPrincipal>}  
      </Route>
      
      <Route exact path="/postar"><PaginaPostar></PaginaPostar></Route>
      <Route exact path="/cadastro"><PaginaFormulario></PaginaFormulario></Route>
      <Route exact path="/login"><PaginaLogin></PaginaLogin></Route>

    </Router>
    
    </AuthContext.Provider>

  );
}

export default App;
