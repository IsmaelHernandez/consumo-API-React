import axios from 'axios'
// import { useState, useEffect } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  // const [user, setUser] = useState()
  // para hacer una peticion asyncrona usar useefect Callback arrayde dependencias 
  // usamos el estado para renderizar la inf de la api en el jsx
  // useEffect(() => {
  //   const URL = 'https://randomuser.me/api/'
  //   axios.get(URL)//axios es una promesa
  //   si llega exitosa la peticion usamos then
  //   el then se ejecuta solo cuando llega la respuesta
  //   crear un estado para pintar los datos de la api en el jsx
  //   .then(res => setUser(res.data.results[0]))
  //   .catch(err => console.log(err.data))
  // },[])


  
  console.log('estoy despues del useEffect')

  //encadenamiento opcional ? si es undefine o null 
  //es como un ternario
  return (
    <div className="App">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      
      
    </div>
    //location y gender
  )
}

export default App
