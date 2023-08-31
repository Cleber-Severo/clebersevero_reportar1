import Checkbox from '/src/components/Checkbox'
import Header from '/src/components/Header'

import './App.scss'
import Button from '../../components/Button'
import { useState } from 'react'

function App() {
  const[error, setError] = useState('');
  const[validation, setValidation] = useState('');

  function validateForm(e) {
    e.preventDefault();

    if (validation == "") {
      setError('error');
      setTimeout(() => { setError(''); }, 2500)
      return;
    }
    setError('')    
  }

  return (
    <div className='app'>
        <Header />
      <form className='report-form' action="" onSubmit={validateForm} >
        <Checkbox />
        <input type="text" placeholder='Título' className={error} onChange={e => setValidation(e.target.value) } />
        <textarea 
          cols="10" 
          rows="10" 
          placeholder='Especifique aqui o que houve'
          className={error}
          onChange={e => setValidation(e.target.value)} 
        ></textarea>
        <small className={error}>*Preencha todos os campos</small>
        <Button>
          Reportar
        </Button>
      </form>
    </div>

  )
}

export default App
