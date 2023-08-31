import Checkbox from '/src/components/Checkbox'
import Header from '/src/components/Header'

import './App.scss'
import Button from '../../components/Button'

function App() {

  function validateForm(e) {
    e.preventDefault();
  }

  return (
    <div className='app'>
        <Header />
      <form className='report-form' action="" onSubmit={validateForm} >
        <Checkbox />
        <input type="text" placeholder='Título' />
        <textarea name="" id="" cols="10" rows="10" placeholder='Especifique aqui o que houve'></textarea>
        <Button>
          Reportar
        </Button>
      </form>
    </div>

  )
}

export default App
