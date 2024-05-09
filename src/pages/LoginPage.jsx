import { IoIosArrowBack } from "react-icons/io"
import { LiaUserClockSolid } from "react-icons/lia"
import { Link, useNavigate } from "react-router-dom"
import { ButtonP } from "../ui/components/ButtonP"
import { useState } from "react"

export const LoginPage = () => {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const handlerUser = (e) =>{
    e.preventDefault()

    if(user === "admin"){
      navigate("/admin")
    }else{
      navigate("/user")
    }
    
  }

  return(
    <div className="flex flex-col h-screen justify-between">
      <header className="w-full bg-blue-p py-2 text-white">
      <nav className="flex justify-between pr-4 items-center">
        <Link to="/" className="text-4xl">
          <IoIosArrowBack />
        </Link>
        <h1 className="text-2xl">Iniciar Sesión</h1>
        <LiaUserClockSolid className="text-4xl"/>
      </nav>
      </header>
      <main className="px-8">
        <form onSubmit={handlerUser} className="grid gap-3">
          <input 
          className="bg-gray-200 rounded-sm px-2 py-3"
            type="text" 
            placeholder="USUARIO"
            onChange={(e) => setUser(e.target.value)}
          />
          <input 
          className="bg-gray-200 rounded-sm px-2 py-3"
            type="text" 
            placeholder="PON TU HUELLA" 
          />
          <ButtonP textSize="text-2xl mt-16">
            Acceder
          </ButtonP>
        </form>

      </main>
      <footer>
        <img className="mb-24" src="./img/logo-etnturistar.png" alt="ETN Turistar Logo" />
      </footer>
    </ div>
  )
}