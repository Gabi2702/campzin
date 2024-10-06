import { useContext } from "react";
import { AuthContext } from "../../../context/auth.js";
import SignUpDiscord from "./providers/signUpDiscord.js";
import SignUpGoogle from "./providers/signUpGoogle.js";
import StateSignUp from "./stateSignUp.js"
import SignUpTwitch from "./providers/signUpTwitch.js";


export default function SignUpButton() {
  const { signUpUserWithProvider} = useContext(AuthContext);

  return (
    <div className="flex flex-row gap-2">
        <SignUpDiscord onClick={() => {signUpUserWithProvider(StateSignUp("discord"))}} />
        <SignUpGoogle onClick={() => {signUpUserWithProvider(StateSignUp("google"))}} />
        <SignUpTwitch onClick={() => {signUpUserWithProvider(StateSignUp("twitch"))}} />
    </div>
  )
}
