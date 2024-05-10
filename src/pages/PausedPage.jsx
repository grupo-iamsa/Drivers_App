import { drivingData } from "../mocks/drivingData"
import { Header, NavBar, Row } from "../ui/components"

export const PausedPage = () => {
  return(
    <>
      <NavBar modal={true}>
        Condunciendo
      </NavBar>
      <main className="pt-16 px-4 animate__animated animate__slideInLeft">
        <form onSubmit="" 
          className="grid gap-2"  
        >
          <label><strong>Ubicación</strong></label>
          <input type="text" 
            className="bg-gray-200 rounded-sm p-2"
          />
          <section className="bg-sky-100 grid grid-cols-2 p-2 text-[11px] gap-2">
            <div className="text-center grid">
              <p className="text-green-700"><strong>Geográficas</strong></p>
              <p className="text-red-500">(grados, min, seg)</p>
              <div className="flex gap-2 items-center justify-between mt-2">
                <label>latitud:</label>
                <input className="p-1 border-gray-200 border-2" type="text" value="19° 25 57.39 N" />
              </div>
              <div className="flex gap-2 items-center justify-between mt-2">
                <label>longitud:</label>
                <input className="p-1 border-gray-200 border-2" type="text" value="19° 25 57.39 N" />
              </div>
            </div>
            <div className="text-center grid">
              <p className="text-green-700"><strong>Geográficas</strong></p>
              <p className="text-red-500">(grados, min, seg)</p>
              <div className="flex gap-2 items-center justify-between mt-2">
                <label>latitud:</label>
                <input className="p-1 border-gray-200 border-2" type="text" value="19° 25 57.39 N" />
              </div>
              <div className="flex gap-2 items-center justify-between mt-2">
                <label>longitud:</label>
                <input className="p-1 border-gray-200 border-2" type="text" value="19° 25 57.39 N" />
              </div>
            </div>
          </section>
        </form>
        <section className="mt-3">
          <header className="grid grid-cols-3 text-[13px] text-center">
            <div>
              <strong>Tramo</strong>
            </div>
            <div>
              <strong>Longitud (KM)</strong>
            </div>
            <div>
              <strong>Carretera</strong>
            </div>
          </header>
          {
            drivingData.map( register => (
              <header className="grid grid-cols-3 text-[12px]">
              <div className="border-t-[1px] border-gray-400 py-1 px-1">
                <p>{register.tramo}</p>
              </div>
              <div className="border-t-[1px] border-gray-400 py-1 px-1">
                <p>{register.longitud} (KM)</p>
              </div>
              <div className="border-t-[1px] border-gray-400 py-1 px-1">
                <p>{register.carretera}</p>
              </div>
            </header>
            ))
          }
        </section>
        <section className="mt-2 border-b-[1px] border-blue-p">
        <Header>Datos del Operador/Conductor</Header>
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
      <section className="px-2 mb-8 mt-2">
        <form className="grid gap-2">
          <label><strong>Nota</strong></label>
          <textarea className="bg-gray-200 h-36"></textarea>
        </form>
      </section>
      </main>

    </>
  )
}