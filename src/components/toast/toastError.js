import { toast } from 'react-toastify'

export default function ToastError(Message) {
  return toast.error(Message,{
    position: "bottom-right",
    className: 'foo-bar'
  })
}
