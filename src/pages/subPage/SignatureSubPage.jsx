import ReactSignatureCanvas from "react-signature-canvas"
import { ButtonP } from "../../ui/components"
import { useNavigate } from "react-router-dom"
import { useDetectedUSer } from "../../hooks/useDetectedUser"

export const SignatureSubPage = () => {
  const navigate = useNavigate()
  const user = useDetectedUSer()
  
  return(
    <section className="p-4 grid gap-16">
      <div className="bg-gray-200 flex overflow-hidden">
      <ReactSignatureCanvas penColor='black'
      canvasProps={{width: 400, height: 200}} />
      </div>
      <ButtonP full onClick={() => navigate(`/${user}`)}>Guardar Firma</ButtonP>
    </section>
  )
}