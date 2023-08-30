import Checkbox from '/src/components/Checkbox'
import Header from '/src/components/Header'

import './App.scss'

function App() {
  return (
    <div className='app'>
        <Header />
      <form className='report-form' action="">
        <Checkbox />
        <input type="text" placeholder='titulo' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Especifique o que houlve'></textarea>

      </form>
    </div>

  )
}

export default App
