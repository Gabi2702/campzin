import { FaDiscord } from "react-icons/fa";
import ButtonClick from "../../../button/buttonClick";


export default function SignUpDiscord({onClick}) {
  return (
    <ButtonClick Title={"Discord"} LogoComponent={FaDiscord} onClick={onClick}/>
  )
}
