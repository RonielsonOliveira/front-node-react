import axios from "axios";
import { get } from "react-hook-form";

export function listarPosts(token){
    return axios({
        method: "GET",
        url: "http://localhost:3002/api/posts",
        headers: {
            "token": token,
        },
    })
}

export function inserirPost(token, post){
    console.log(token)
    return axios({
        method: "POST",
        url: "http://localhost:3002/api/post",
        headers: {
            "token": token,
        },
        data: post
    })
}