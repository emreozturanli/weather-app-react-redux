import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
    const apiKey = sessionStorage.getItem('apiKey')
    
  return (
        apiKey 
        ? 
        <Navigate to="/cities"/>
        :
        <Outlet/>
  )
}

export default PrivateRouter