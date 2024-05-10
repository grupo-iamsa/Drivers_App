import { useState } from "react"
import { GiSteeringWheel } from "react-icons/gi"
import { CircleBtn, Header, NavBar, Row, Tabe } from "../ui/components"
import { IoPauseOutline } from "react-icons/io5"
import { TbBed, TbClockExclamation } from "react-icons/tb"
import { BiTrafficCone } from "react-icons/bi"
import { CiWarning } from "react-icons/ci"
import { BsBusFront } from "react-icons/bs"
import { activity } from "../mocks/activity"
import { useDetectedUSer } from "../hooks/useDetectedUser"
import { DriverCredentials } from "../ui/DriverCredentials"
import { Link } from "react-router-dom"

export const LoggedPage = () => {

  const [modal, setModal] = useState(<></>)

  const user = useDetectedUSer()

  const showDriverCredentials = () =>{
    setModal(<DriverCredentials/>)
  }

  return(
    <>
    { modal }
    <NavBar />
    <section className="animate__animated animate__slideInLeft">
      <Header className="pt-16">Datos del Operador/Conductor</Header>
      <section>
        <Row>
          <p><strong>Nombre o Razon Social:</strong></p>
          <p>GHO NETWORKS SA DE CV</p>
        </Row>
        <Row bg="gray" cols="2">
            <p><strong>Marca: </strong>SCA</p>
            <p><strong>Modelo: </strong>1999</p>
        </Row>
        <Row cols="2">
            <p><strong>Placas: </strong> 834HV3</p>
            <p><strong>No.Economico: </strong>1009</p>
        </Row>
        <Row cols="2" bg="gray">
            <p><strong>Tipo Servicio: </strong> PASAJE</p>
            <p><strong>Modalidad: </strong>Economico</p>
        </Row>
        <Row cols="2">
            <p><strong>Nombre del Conductor: </strong></p>
            <p>JOEL NOHPAL VELAZCO</p>
        </Row>
        <Row cols="2" bg="gray">
            <p><strong>No.Empleado </strong> 49001809</p>
            <p><strong>No. Licencia: </strong>PUE0018844</p>
        </Row>
        <Row cols="1">
            <p><strong>Vigencia Licencia </strong> 12/09/2023</p>
        </Row>
      </section>
      <section>
        <Header>
          Lunes 31 de Julio 2024
        </Header>
        <nav className="grid grid-cols-6 gap-3 px-2 py-2 bg-gray-200">
          <CircleBtn text="Conduciendo" link={`/${user}/driving`}>
            <GiSteeringWheel className="text-5xl" />
          </CircleBtn>
          <CircleBtn text="Pausa" link={`/${user}/paused`}>
            <IoPauseOutline className="text-5xl" />
          </CircleBtn>
          <CircleBtn text="Actividades auxiliares" link={`/${user}/auxiliary-activities`}>
            <TbClockExclamation className="text-5xl" />
          </CircleBtn>
          <CircleBtn text="Casos de excepcion" link={`/${user}/exception-cases`}>
            <BiTrafficCone className="text-5xl" />
          </CircleBtn>
          <CircleBtn text="Descanso" link={`/${user}/rest`}>
            <TbBed className="text-5xl" />
          </CircleBtn>
          <CircleBtn text="Fuera de servicio" onClick={showDriverCredentials}>
            <CiWarning className="text-5xl stroke-[1px]" />
          </CircleBtn>
        </nav>
      </section>
      <Tabe />
      <section>
        <Header>
          Datos del Operador/Conductor
        </Header>
        {
          activity.map( (event, index) =>(
            <Link to={`/${user}/show-event`}>
              <Row cols="2" bg={index % 2 === 0 ? "" : "gray"} onClick className="font-semibold">
              <p>{event.date}</p>
              <p className="flex items-center justify-end gap-2">{event.hour}<BsBusFront className="text-3xl" /></p>
            </Row>
            </Link>
          ))
        }
      </section>
    </section>
    </>
  )
}