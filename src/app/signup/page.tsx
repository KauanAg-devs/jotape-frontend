'use client'

import { useState } from 'react'
import Body from '../../components/body'
import SignUpRequest from '../../utils/sign-up-request'
import SignForm from '../../components/signup/form/sign-form'
import InputsForm from '../../components/signup/form/inputs-form'
import FormContainer from '../../components/signup/form/form-container'
import AuthButton from '../../components/signup/form/auth-button'

function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUpAttempt, setSignUpAttempt] = useState<boolean>(true)

  const handleSignUp = async () => {
    try {
      setSignUpAttempt(username && password ? true : false)
      await SignUpRequest('URL', { username, password })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Erro no cadastro:', error)
    }
  }

  return (
    <Body>
      <div className='mb-20'>
      <h1 className="font-inria-sans text-4xl leading-[77px] mb-9">
        Projeto de Posts
      </h1>

      <FormContainer>
        <InputsForm
         signUpAttempt={signUpAttempt}
         username={username}
         password={password}
         setUsername={setUsername}
         setPassword={setPassword}
         />
        <SignForm 
          onClick={handleSignUp} 
          disabled={!username || !password}
        />
      </FormContainer>
      <AuthButton/>
      </div>
    </Body>    
  )
}

export default SignUp
