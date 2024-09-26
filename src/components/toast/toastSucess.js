import { toast } from 'react-toastify'

export default function ToastSucess(Message) {
  return toast.success(Message,{
    position: "bottom-right",
    className: 'foo-bar'
  })
}
