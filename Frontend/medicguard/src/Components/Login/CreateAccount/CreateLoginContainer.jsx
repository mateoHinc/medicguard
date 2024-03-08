import React from 'react'
import Button from '../Button'
const CreateLoginContainer = ({onSubmit}) => {
  return (
    <>
      <div className="login-container">
      <Button type="submit" onClick={onSubmit}>Crear Cuenta</Button>
    </div>
    </>
  )
}

export default CreateLoginContainer
