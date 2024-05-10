import { useState } from "react"
import { ButtonP, Header, NavBar, Row, } from "../ui/components"

export const AuxActivitiesPage = () => {

  const [pausedEvents, setPausedEvent] = useState([])
  const [userData, setUserData] = useState({
    reason: "Accidente Carretera",
    location: "Pachuca",
    days: "1",
    month: "Enero",
    year: "2024",
    hours: "00",
    min:"00",
    other:""
  })

  //esta es una condicion para que solo se guarde 1 motivo
  if(userData.reason != "otro") userData.other = "";


  const handlerForm = (e) =>{
      setUserData({
        ...userData,
        [e.target.name]:e.target.value
      })
  }

  const saveEvent = (e) =>{
    e.preventDefault()

    setPausedEvent([
      ...pausedEvents,
      userData
    ])
  }

  return(
    <>
      <NavBar modal={true}>
        Actividades Auxiliares
      </NavBar>
      <main className="pt-16 px-4 animate__animated animate__slideInLeft">
        <form className="">
          <div className="grid">
            <label className="col-span-3"><strong>Ubicacion</strong></label>
            <input 
              name="location" 
              type="text" 
              className="bg-gray-200 p-2 col-span-3"
              value={userData.location}
              onChange={(e) => handlerForm(e)}
            />
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            <label className="col-span-1 mt-4"><strong>Motivo:</strong></label>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-4/5 px-2 "
              name="reason"
              value={userData.reason}
              onChange={(e) => handlerForm(e)}
            >
              <option value="Accidente en carretera">Accidente en carretera</option>
              <option value="Bloqueo en Caseta">Bloqueo en Caseta</option>
              <option value="Llanta ponchada">Llanta ponchada</option>
              <option value="Deslave en carretera">Deslave en carretera</option>
              <option value="otro">Otro</option>
            </select>
            { userData.reason === "otro" ?
              <textarea className="w-full p-2 bg-gray-200 rounded-md" 
                placeholder="Escribe el Motivo"
                name="other"
                value={userData.other}
                onChange={(e) => handlerForm(e)}
              ></textarea>
              : null  
            }
          </div>

          <div className="grid grid-cols-3 my-6 p-2 bg-blue-p rounded-md gap-3">
            <label className="text-white col-span-3"><strong>Fecha</strong></label>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-full p-2 "
              name="days"
              value={userData.days}
              onChange={(e) => handlerForm(e)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>

            </select>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-full p-2 "
              name="month"
              value={userData.month}
              onChange={(e) => handlerForm(e)}
            >
              <option value="Enero">Enero</option>
              <option value="Febrero">Febrero</option>
              <option value="Marzo">Marzo</option>
              <option value="Abril">Abril</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
              <option value="Agosto">Agosto</option>
              <option value="Septiembre">Septiembre</option>
              <option value="Octubre">Octubre</option>
              <option value="Noviembre">Noviembre</option>
              <option value="Diciembre">Diciembre</option>
            </select>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-full p-2 "
              name="year"
              value={userData.year}
              onChange={(e) => handlerForm(e)}
            >
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
            </select>
            <label className="text-white col-span-3"><strong>Hora</strong></label>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-full p-2 "
              name="hours"
              value={userData.hours}
              onChange={(e) => handlerForm(e)}
            >
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
            </select>
            <select 
              className="bg-gray-200 rounded-md mt-2 w-full p-2"
              name="min"
              value={userData.min}
              onChange={(e) => handlerForm(e)}
              
            >
              <option value="00">00</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
              <option value="60">60</option>
            </select>
          </div>
          <ButtonP full onClick={(e) => saveEvent(e)}>Agregar</ButtonP>
        </form>
      </main>
      <section className="my-4">
        <Header>
          Resumen de Eventos en 24 horas
        </Header>
        {
          pausedEvents.map((event, index) => (
            <Row cols="2" bg={ index % 2 === 0 ? "" : "gray"}  className="items-center font-semibold border-b-2 border-gray-500">
            <p><strong>Fecha y hora:</strong></p>
            <p className="flex items-center justify-end gap-2">{event.days}/{event.month}/{event.year} - {event.hours}h {event.min}min</p>
            <p><strong>Motivo:</strong></p>
            { 
              <p className="flex items-center justify-end gap-2">{event.other.length > 1 ? event.other : event.reason}</p>
            }
            <p><strong>Ubicacion:</strong></p>
            <p className="flex items-center justify-end gap-2">{event.location}</p>
          </Row>
          ))
        }
      </section>

    </>
  )
}