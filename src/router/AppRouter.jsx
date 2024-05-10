import { Route, Routes } from "react-router-dom"
import { AuxActivitiesPage, DrivingPage, GraphicsPage, HomePage, LoggedPage, LoginPage, PausedPage } from "../pages"

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
    </Routes>

  )
}