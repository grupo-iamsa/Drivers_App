import { Tabe } from "../../ui/components"

export const DetailSubPage = () => {
  return(
    <section>
      <Tabe />
      <div className="bg-gray-200 p-2">
          <div className="flex justify-between">
            <p>Fuera de Servicio</p>
            <span className="flex gap-2">
              <p>12:00AM</p>
              <p>23h 59m</p>
            </span>
          </div>
          <p>Libre a Zapotlanejo Km. 1.5, Nueva Central</p>
        </div>
      <div className="p-2">
          <div className="flex justify-between">
            <p>Fuera de Servicio</p>
            <span className="flex gap-2">
              <p>3:28 PM</p>
              <p>11h 19m</p>
            </span>
          </div>
          <p>Moralistas 23, San Jose Aculco</p>
        </div>
      <div className="bg-gray-200 p-2">
          <div className="flex justify-between">
            <p>Fuera de Servicio</p>
            <span className="flex gap-2">
              <p>12:00AM</p>
              <p>23h 59m</p>
            </span>
          </div>
          <p>Libre a Zapotlanejo Km. 1.5, Nueva Central</p>
        </div>
    </section>
  )
}