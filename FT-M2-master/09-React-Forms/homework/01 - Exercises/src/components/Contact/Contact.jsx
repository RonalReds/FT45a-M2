import React from 'react'
import './Contact.modules.css'
import { useState } from 'react';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export function validate(inputs) {
  let errors = {};
  if (!inputs.name) errors.name = "Se requiere un nombre";
  if (!regexEmail.test(inputs.email)) errors.email = "Debe ser un correo electrónico";
  if (!inputs.message) errors.message = "Se requiere un mensaje";
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    })

    setErrors(validate({
      ...inputs,
      [name] : value
    }))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!Object.values(errors).length) {
      alert('Datos completos');
      setInputs({
        name: '',
        email: '',
        message: ''
      })

      setErrors({
        name: '',
        email: '',
        message: ''
      })
    } else {
      alert('Debe llenar todos los campos')
    }

  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          name='name'
          placeholder="Escribe tu nombre..."
          type='text'
          value={inputs.name}
          onChange={handleChange}
          className={errors.name && 'warning'}
        />
        {errors.name? <p className='danger'>{errors.name}</p> : null}
        <label>Correo Electrónico:</label>
        <input
          name='email'
          placeholder="Escribe tu email..."
          type='text'
          value={inputs.email}
          onChange={handleChange}
          className={errors.email && 'warning'}
        />
        {errors.email? <p className='danger'>{errors.email}</p> : null}
        <label>Mensaje:</label>
        <textarea
          name='message'
          placeholder="Escribe tu mensaje..."
          type='text'
          value={inputs.message}
          onChange={handleChange}
          className={errors.message && 'warning'}
        />
        {errors.message? <p className='danger'>{errors.message}</p> : null}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
