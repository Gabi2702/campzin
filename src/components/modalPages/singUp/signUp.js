import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.js";
import SignUpDiscord from "./providers/signUpDiscord.js";
import SignUpGoogle from "./providers/signUpGoogle.js";
import StateSignUp from "./stateSignUp.js"


export default function SignUpButton() {
  const { signUpUser, signUpUserWithProvider} = useContext(AuthContext);

  return (
    <div className="flex flex-row gap-2">
        <SignUpDiscord onClick={() => {signUpUserWithProvider(StateSignUp("discord"))}} />
        <SignUpGoogle onClick={() => {signUpUserWithProvider(StateSignUp("google"))}} />
    </div>
  )
}
