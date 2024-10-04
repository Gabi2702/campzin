import { Input } from '../../input/index'

export default function FormLogin({formData, setFormData}) {
  return (
    <div>
        <Input
        id="email"
        label="Email"
        placeholder="Digite seu email"
        formData={formData}
        setFormData={setFormData}
        />

        <Input
        type={"password"}
        id="password"
        label="Senha"
        placeholder="Digite sua senha"
        formData={formData}
        setFormData={setFormData}
        />
    </div>
  )
}
