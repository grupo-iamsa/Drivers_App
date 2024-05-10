import { ButtonP, Header, Row } from "../../ui/components"

export const DataSubPage = () => {
  return(
    <>
    <section className="text-sm">
      <div class="grid grid-cols-4 text-center font-semibold py-1">
        <p>Origen</p>
        <p>Salida</p>
        <p>Hora</p>
        <p>No.ROL</p>
      </div>
      <div class="grid grid-cols-4 text-center bg-gray-200 py-1">
        <p>MEXICALI</p>
        <p>17/07/2019</p>
        <p>14:00:00</p>
        <p></p>
      </div>
      
      <div class="grid grid-cols-4 text-center py-1">
        <p>Destino</p>
        <p>Llegada</p>
        <p>Hora</p>
        <p>No.ROL</p>
      </div>
      <div class="grid grid-cols-4 text-center bg-gray-200 py-1">
        <p>TIJUANA</p>
        <p>17/07/2019</p>
        <p>09:28:31</p>
        <p></p>
      </div>
      <div className="p-2">
        <p>Punto Intermedio</p>
      </div>
    </section>
    <section>
      <Header className="">Datos del Operador/Conductor</Header>
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
    <div className="px-4 mt-16">
      <ButtonP full>Puntos Intermedios</ButtonP>
    </div>
    </>
  )
}