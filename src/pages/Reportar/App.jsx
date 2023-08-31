import React from 'react'
import Checkbox from '/src/components/Checkbox'
import Header from '/src/components/Header'

import Button from '../../components/Button'
import { useState } from 'react'
import { Grow, Snackbar } from '@mui/material'

import './App.scss'

function GrowTransition(props) {
  return <Grow {...props} />;
}

function App() {
  const [error, setError] = useState('');
  const [validation, setValidation] = useState('');

  const [openSnack, setOpenSnack] = React.useState(false);
  const [vertical, setverical] = React.useState('top');
  const [horizontal, setHorizontal] = useState('center');
  const [transitionSnack, setTransitionSnack] = useState({ Transition: GrowTransition })

  const handleClickOpenSnack = () => {
    setOpenSnack(true);
  };
  const handleCloseSnack = () => {
    setOpenSnack(false);
  };

  function validateForm(e) {
    e.preventDefault();

    if (validation == "") {
      setError('error');
      setTimeout(() => { setError(''); }, 2500)
      return;
    }

    handleClickOpenSnack()
    setError('')
    setTimeout(() => { window.location.reload(); }, 1800)
  }

  return (
    <div className='app'>
      <Header />
      <form className='report-form' action="" onSubmit={validateForm} >
        <Checkbox error={error} />
        <input type="text" placeholder='Título' className={error} onChange={e => setValidation(e.target.value)} />
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

      <Snackbar
        open={openSnack}
        autoHideDuration={1500}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical, horizontal }}
        message="Reportado com sucesso!"
        TransitionComponent={transitionSnack.Transition}
      />
    </div>


  )
}

export default App
