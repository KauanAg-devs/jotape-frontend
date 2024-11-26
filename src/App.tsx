import { useState } from "react"
import Body from "./components/body"
import FormContainer from "./components/form/form-container"
import InputsForm from "./components/form/inputs-form"
import SignForm from "./components/form/sign-form"
import { UserData } from "./@types/types"
import SignUpRequest from "./api/api"

function App() {
  const [userData, setUserData] = useState<UserData | null>()

  return (
      <Body>
        
        <h1 className="font-inria-sans text-4xl leading-[77px] text-white">
          Cadastro de Usuários
        </h1>

       <FormContainer>
         <InputsForm setUserData={setUserData}/>       
         <SignForm onclick={() => SignUpRequest('digite o link da api', userData!)}/>
       </FormContainer>
      </Body>
  )
}

export default App
