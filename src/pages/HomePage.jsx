import { CiClock2 } from "react-icons/ci"
import { ButtonP } from "../ui/components/ButtonP"
import { Link } from "react-router-dom"

export const HomePage = () =>{
  return(
    <main className="w-full h-screen flex flex-col justify-between py-16 items-center">
    <header>
      <img src="./img/logo-etnturistar.png" alt="ETN Turistar Logo" />
    </header>
    <section>
      <div className=" flex gap-2 text-4xl font-bold items-center text-blue-p">
        <h1>NOM-087-SCT</h1>
        <CiClock2 className="text-5xl"/>
      </div>
    </section>
    <footer className="w-full px-8">
      <Link to="/login">
        <ButtonP children="INGRESAR" textSize="text-2xl" />
      </Link>
    </footer>
    </main>
  )
}