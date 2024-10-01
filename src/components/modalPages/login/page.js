import Modal from "../../modal/modal";
import React, { useState, useContext } from 'react';
import { StateFormLogin } from './stateFormLogin';
import FormLogin from './formLogin';
import { AuthContext } from "../../../context/auth";


export default function LoginButton() {
  const { loginUser } = useContext(AuthContext);
  const [Login, setLogin] = useState(StateFormLogin());

  const resetForm = () => {
    setLogin(StateFormLogin());
  }

  const handleLogin = async () => {
    try {
      await loginUser(Login); 
      resetForm(); 
    } catch (error) {
      console.log("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <Modal handleSubmit={handleLogin} onClose={resetForm} buttonTitle={"Login"} Title={"Login"}>
        <FormLogin formData={Login} setFormData={setLogin} />
      </Modal>
    </div>
  );
}
