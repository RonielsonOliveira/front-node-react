import axios from "axios";

export function cadastrar(user){
     return axios({
        method:"POST",
        url:"http://localhost:3002/api/usuarios",
        data: user,
    })
}


export function login (login_data){
    return axios({
        method:"POST",
        url:"http://localhost:3002/api/usuarios/signin",
        data:login_data,
    }) 
}