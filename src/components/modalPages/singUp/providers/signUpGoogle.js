import { FaGoogle } from "react-icons/fa";
import ButtonClick from "../../../button/buttonClick";

export default function SignUpGoogle({onClick, setProvider}) {
  return (
    <ButtonClick Title={"Google"} LogoComponent={FaGoogle} onClick={onClick}/>
  )
}
