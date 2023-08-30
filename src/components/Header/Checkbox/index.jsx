import React from 'react'
import './Checkbox.scss'

const Checkbox = () => {
    return (
        <div className='checkbox-form'>

            <div>
                <input type="checkbox" name='options' id='checkbox_1' />
                <label htmlFor="checkbox_1">O profissional não compareceu</label>
            </div>

            <div>
                <input type="checkbox" name='options' id='checkbox_2' />
                <label htmlFor="checkbox_2">O profissional não prestou um bom serviço</label>
            </div>

            <div>
                <input type="checkbox" name='options' id='checkbox_3' />
                <label htmlFor="checkbox_3">Outro.</label>
            </div>
        </div>
    )
}

export default Checkbox