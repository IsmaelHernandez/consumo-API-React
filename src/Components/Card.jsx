
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Card() {
    
    const [user, setUser] = useState({})
    //para hacer una peticion asyncrona usar useefect Callback arrayde dependencias 
  //usamos el estado para renderizar la inf de la api en el jsx
  useEffect(() => {
    const URL = 'https://randomuser.me/api/'
    axios.get(URL)//axios es una promesa
    //si llega exitosa la peticion usamos then
    //el then se ejecuta solo cuando llega la respuesta
    //crear un estado para pintar los datos de la api en el jsx
    .then(res => setUser(res.data.results[0]))
    .catch(err => console.log(err.data))
  },[])

   //encadenamiento opcional ? si es undefine o null 
   //es como un ternario

  return (
    <div className="card">
        <div className="card-logo">
        <img src={user.picture?.large} alt="" />
        </div>
        <div className="card-content">
            <ul>
                <li><span className='bold'>Name: </span>{user.name?.first+ ' ' + user.name?.last + ' ' + user.name?.title}</li>
                <li><span className='bold'>Email: </span>{user.email}</li>
                <li><span className='bold'>City: </span>{user.location?.city}</li>
                <li><span className='bold'>Country: </span>{user.location?.country}</li>
                <li><span className='bold'>Gender: </span>{user.gender}</li>
            </ul> 
        </div>
    </div>
    
       
    
  )
}

export default Card