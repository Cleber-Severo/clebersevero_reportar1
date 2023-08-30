import Checkbox from '/src/components/Checkbox'
import Header from '/src/components/Header'

import './App.scss'

function App() {
  return (
    <div className='app'>
        <Header />
      <form className='report-form' action="">
        <Checkbox />
        <input type="text" placeholder='Título' />
        <textarea name="" id="" cols="10" rows="10" placeholder='Especifique o que houve'></textarea>

      </form>
    </div>

  )
}

export default App
