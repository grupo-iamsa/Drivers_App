import { IoMenu } from "react-icons/io5"
import { TbChartInfographic } from "react-icons/tb"

export const NavBar = () => {
  return(
    <header className="w-full bg-blue-p text-white text-4xl">
      <nav className="py-2 flex justify-between px-4 items-center">
        <IoMenu />
        <h2 className="text-xl">Bitácora de Conducción</h2>
        <TbChartInfographic />
      </nav>
    </header>
  )
}