import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")

function handleBuscar(){

axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data))

}

  return (
    <>
    <div className='container'>
      <div className='paginaPesquisa'>
        <div className='busca'>
          <input type="text" value={usuario} name="" id="" onChange={e => setUsuario(e.target.value)}/>
          <button onClick={handleBuscar}>Pesquisar</button>
        </div>
        <div className='imagemBusca'>
        {/*imagem de fundo*/}
        </div>
      </div>

      <div className='resultadoPesquisa'>
        <div className='header'>
          <div className='fotoPerfil'>
            {/*Foto de Perfil*/}
          </div>
          <div className='dadosPrincipais'>
            <h2>{/*Nome*/}</h2>
            <h4>{/*Usuário*/}</h4>
          </div>
        </div>

        <div className='repositorio'>
        
        </div>

      </div>

    </div>
      </>
  )
}

export default App
