import { useState } from 'react'
import Body from '../components/body'
import FormContainer from '../components/form/form-container'
import InputsForm from '../components/form/inputs-form'
import SignForm from '../components/form/sign-form'
import { UserData } from '../@types/types'
import SignUpRequest from '../api/sign-up-request'

function SignUp() {
  const [userData, setUserData] = useState<UserData | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async () => {
    setError(null)

    if (!userData) return setError('User data is not available')

    try {
      await SignUpRequest('URL', userData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Erro no cadastro:', error)
      setError(error.message || 'Signup failed')
    }
  }

  return (
    <Body>
      <h1 className="font-inria-sans text-4xl leading-[77px] text-white">
        Cadastro de Usuários
      </h1>

      {error && (
        <div className="text-red-500 mb-4 text-center">
          {error}
        </div>
      )}

      <FormContainer>
        <InputsForm setUserData={setUserData} />
        <SignForm 
          onClick={handleSignUp} 
          disabled={!userData}
        />
      </FormContainer>
    </Body>
  )
}

export default SignUp
