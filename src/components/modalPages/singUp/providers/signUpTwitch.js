import { FaTwitch  } from "react-icons/fa";
import ButtonClick from "../../../button/buttonClick";


export default function SignUpTwitch({onClick}) {
  return (
    <ButtonClick Title={"Twitch"} LogoComponent={FaTwitch} onClick={onClick}/>
  )
}
