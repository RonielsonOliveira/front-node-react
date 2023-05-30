function Card ({usuario,texto,likes}){
    return (
        <div className="card">
            <h3 className="titulo-card">{usuario}</h3>
            <span className="conteudo">{texto}</span>
            <span className="conteudo-like" >Likes: {likes} <button class= "button"href="link">Like</button></span>
            <label>
              
                <input type="text" className="comentario" name="comment" placeholder= "Escreva sua mensagem" />
          
               </label>
               <button className="conteudo-like" >Enviar Comentario</button>
               
        </div>
    )
}

export function Conteudo({posts}){
    return(
        <ul> <div className="card">{posts.map((post)=>(<li><Card usuario = {post.usuario.nome} texto={post.texto} likes={post.likes}></Card></li>))}</div></ul>
   
    )

}