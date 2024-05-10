import { BsBusFront } from "react-icons/bs"
import { Header, NavBar, Row } from "../ui/components"
import "animate.css"

export const GraphicsPage = () => {
  return(
    <>
    <NavBar modal={true}>
      Datos de Consuccion
    </NavBar>
    <section className="animate__animated animate__slideInLeft">
      <section className="flex flex-wrap justify-center pt-16">
        <section className="w-[45%] px-4 py-2 text-center text-lg gap-3 flex flex-col">
          <p>Ultimas 24 horas Conduciendo</p>
          <div className="rounded-full border-[15px] border-gray-200 aspect-square w-full flex flex-col
           justify-center text-blue-p font-bold text-lg">
            <p>00h 00m</p>
            <p>0%</p>
          </div>
        </section>
        <section className="w-[45%] px-4 py-2 text-center text-lg gap-3 flex flex-col">
          <p>Ultimas 24 horas Conduciendo</p>
          <div className="rounded-full border-[15px] border-gray-200 aspect-square w-full flex flex-col
           justify-center text-blue-p font-bold text-lg">
            <p>00h 00m</p>
            <p>0%</p>
          </div>
        </section>
        <section className="w-[45%] px-4 py-2 text-center text-lg gap-3 flex flex-col">
          <p>Horas Disponibles</p>
          <div className="rounded-full border-[15px] border-blue-p aspect-square w-full flex flex-col
           justify-center text-blue-p font-bold text-lg">
            <p>14h 00m</p>
            <p>100%</p>
          </div>
        </section>
      </section>
      <section className="mt-8">
        <Header>
          Resumen de tiempos en 24 horas
        </Header>
        <Row cols="2"  className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
        <Row cols="2"  bg="gray" className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
        <Row cols="2"  className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
        <Row cols="2" bg="gray"  className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
        <Row cols="2"  className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
        <Row cols="2" bg="gray"  className="items-center font-semibold ">
          <p>Fuera de Servicio</p>
          <p className="flex items-center justify-end gap-2">9h 30m<BsBusFront className="text-3xl" /></p>
        </Row>
      </section>
    </section>
    </>
  )
}