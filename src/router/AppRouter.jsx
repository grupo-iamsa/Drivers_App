import { Route, Routes } from "react-router-dom"
import { DrivingPage, GraphicsPage, HomePage, LoggedPage, LoginPage } from "../pages"

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
    </Routes>

  )
}