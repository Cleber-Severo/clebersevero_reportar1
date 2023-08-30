import Checkbox from '/src/components/Header/Checkbox'
import './App.scss'
import Header from '/src/components/Header'

function App() {
  return (
    <div className='app'>
      <form className='report-form' action="">
        <Header />
        <Checkbox />
        <input type="text" placeholder='titulo' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Especifique o que houlve'></textarea>

      </form>
    </div>

  )
}

export default App
