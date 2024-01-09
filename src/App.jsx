import { RouterProvider } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homePage/homePage'
import Trailermoredetail from './pages/trailerMoreDetail/trailerMoreDetail'
import router from './router'

function App() {

  return (
    <>
   {/*    <Homepage/> 
   <Trailermoredetail/>*/}
   <RouterProvider router={router}/>

    </>
  )
}

export default App
