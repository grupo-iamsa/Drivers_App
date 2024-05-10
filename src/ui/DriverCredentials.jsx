import { FaQuestion } from "react-icons/fa"
import { FaCircleUser } from "react-icons/fa6"
import { LuLogOut } from "react-icons/lu"
import { Link } from "react-router-dom"

export const DriverCredentials = () => {
  return(
    <div className="bg-black/80 h-screen w-screen fixed z-10 top-0 left-0 flex 
    items-center justify-center ">
      <div className=" border-2 border-gray-500 rounded-md 
      overflow-hidden w-[90%] bg-white animate__animated animate__zoomIn">
      <header className="text-3xl flex justify-end p-2 gap-2">
        <FaQuestion />
        <FaCircleUser />
      </header>
      <div className="bg-gray-200 flex items-center justify-between p-2 text-2xl font-bold">
        <p>Mi Cuenta</p>
        <Link to="/login">
        <LuLogOut />
        </Link>
      </div>
      <div className="flex p-2">
        <img 
          className="w-2/5 aspect-square object-cover rounded-full"
          src="/img/profile.jpg" 
          alt="profile" 
        />
        <div className="pl-4">
          <p className=" font-bold">Nombre del Conductor</p>
          <p>Joel Nohpal Velazco</p>
          <p className=" font-bold">No. Empleado</p>
          <p>49001809</p>
          <p className="font-bold text-red-500 mt-3 text-xl text-center">Fuera de Servicio</p>
        </div>
      </div>
    </div>
    </div>
  )
}