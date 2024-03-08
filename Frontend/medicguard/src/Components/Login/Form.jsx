import React from 'react'
import Copy from './Copy'
import InputContainer from './InputContainer'
import LoginContainer from './LoginContainer'

const Form = () => {
  return (
    <>
    <form>
      <Copy id="welcome" />
      <InputContainer label="Usuario" type="text" name="fname" id="fname" />
      <InputContainer label="Contraseña" type="password" name="lname" id="lname" />
      <LoginContainer />
    </form>
    </>
  )
}

export default Form
