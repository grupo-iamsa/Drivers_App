import { useState } from "react"
import { NavBar } from "../ui/components"
import { DetailSubPage } from "./subPage/DetailSubPage"
import { DataSubPage } from "./subPage/DataSubPage"
import { SignatureSubPage } from "./subPage/SignatureSubPage"
import { MapsSubPage } from "./subPage/MapsSubPage"

export const ShowEvent = () => {

  const [sections, setSection] = useState(<DetailSubPage />)
  return(
    <>
      <NavBar subPage>18 Julio 2024</NavBar>
      <ul className="pt-16 bg-gray-200 grid grid-cols-4 text-center py-2 font-bold">
        <li onClick={() => setSection(<DetailSubPage />)}>Detalle</li>
        <li onClick={() => setSection(<DataSubPage />)}>Datos</li>
        <li onClick={() => setSection(<SignatureSubPage />)}>Firma</li>
        <li onClick={() => setSection(<MapsSubPage />)}>Recorrido</li>
      </ul>
      { sections }
    </>
  )
}