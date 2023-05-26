import { useState } from 'react'
import Account from './components/Account'
import RepoList from './components/RepoList'
import './global.css'

function App() {
  const [name, setName] = useState('') ;

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      setName(event.target.value)
    }
  }

  return (
    
    <>
      <div className='userName'>
        <p>Nome do usuário:</p>
        <input className="userNameInput" type='text' onKeyDown={event => pressEnter(event)} onBlur={(e) => setName(e.target.value)} placeholder={`tente 'Aleolivati'`}/>
      </div>
      <p className='userNameExplanation'>Clique fora do campo preenchido ou tecle 'Enter' para efetuar a busca</p>
      {name.length === 0 ? (
        <div>
        </div>
      ) : ( name.length > 4 ? (
          <div>
            <Account userName={name}/>
            <RepoList userName={name}/>
          </div>
        ) : (
          <div className='alert alertFirst'>
            <h2>Nome do usuário muito curto!</h2>
            <p>Favor inserir um nome de usuário válido!</p>
          </div>
        )
      )}
    </>
  )
}

export default App
