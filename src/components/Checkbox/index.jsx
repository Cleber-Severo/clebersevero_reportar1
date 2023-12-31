import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ error }) => {
    return (
        <div className={`checkbox-form ${error}`}>
            <label className='checkbox-item'>
                <input type="checkbox"  />
                O profissional não compareceu
                <span></span>
            </label>

            <label className='checkbox-item'>
                <input type="checkbox"  />
                O profissional não prestou um bom serviço
                <span></span>
            </label>

            <label className='checkbox-item'>
                <input type="checkbox"  />
                Outro.
                <span></span>
            </label>
        </div>
    )
}

export default Checkbox