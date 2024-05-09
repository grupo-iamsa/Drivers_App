import { Link } from "react-router-dom"

export const CircleBtn = ({ children, text, link }) => {
  return(
    <Link 
      to={link} 
      className="flex flex-col items-center text-[9px] gap-1">
      <span className="bg-gray-500 rounded-full p-1 text-white hover:bg-blue-p
      active:bg-blue-p active:scale-95 transition-all">
        { children }
      </span>
      <p className="text-center">{ text }</p>
    </Link>
  )
}