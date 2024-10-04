

export  function StateSignUpWithProvider(provider) {
  return {
    provider: provider
  }
}

export  function StateSignUpWithEmailPassword(){
  return {
    email:"",
    password:""
  }
}

export default function StateSignUp(provider){
  if(provider == undefined){
    return StateSignUpWithEmailPassword()
  }
  return StateSignUpWithProvider(provider)
}