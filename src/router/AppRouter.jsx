import { Route, Routes } from "react-router-dom"
import { AuxActivitiesPage, DrivingPage, ExceptionPage, GraphicsPage, HomePage, LoggedPage, LoginPage, PausedPage, RestPage, ShowEvent } from "../pages"

export const AppRouter = () =>{

  return(

    <Routes>
      <Route path="/" element={ <HomePage />} />
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/admin" element={ <LoggedPage />} />
      <Route path="/driver" element={ <LoggedPage />} />
      <Route path="/admin/graphics" element={ <GraphicsPage />} />
      <Route path="/driver/graphics" element={ <GraphicsPage />} />
      <Route path="/admin/driving" element={ <DrivingPage />} />
      <Route path="/driver/driving" element={ <DrivingPage />} />
      <Route path="/admin/paused" element={ <PausedPage />} />
      <Route path="/driver/paused" element={ <PausedPage />} />
      <Route path="/admin/auxiliary-activities" element={ <AuxActivitiesPage />} />
      <Route path="/driver/auxiliary-activities" element={ <AuxActivitiesPage />} />
      <Route path="/admin/exception-cases" element={ <ExceptionPage />} />
      <Route path="/driver/exception-cases" element={ <ExceptionPage />} />
      <Route path="/admin/rest" element={ <RestPage />} />
      <Route path="/driver/rest" element={ <RestPage />} />
      <Route path="/admin/show-event" element={ <ShowEvent />} />
      <Route path="/driver/show-event" element={ <ShowEvent />} />
    </Routes>

  )
}