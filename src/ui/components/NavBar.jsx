import { FaRegSave } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import { IoMenu } from "react-icons/io5"
import { TbChartInfographic } from "react-icons/tb"
import { Link } from "react-router-dom"

export const NavBar = ({children, modal=false, user ="driver"}) => {
  if(modal){
    return(
      <header className="w-full bg-blue-p text-white text-4xl fixed">
        <nav className="py-2 flex justify-between px-4 items-center">
          <Link to={`/${user}`} className="text-4xl">
            <IoIosArrowBack />
          </Link>
          <h2 className="text-xl">{ children }</h2>
          <Link to={`/${user}/graphics`}>
            <FaRegSave />
          </Link>
        </nav>
      </header>
    )
  }else{
    return(
      <header className="w-full bg-blue-p text-white text-4xl fixed">
        <nav className="py-2 flex justify-between px-4 items-center">
          <IoMenu />
          <h2 className="text-xl">Bitácora de Conducción</h2>
          <Link to={`/${user}/graphics`}>
            <TbChartInfographic />
          </Link>
        </nav>
      </header>
    )
  }
}