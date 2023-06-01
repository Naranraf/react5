import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoutes = () => {
   
    if( userName === '' ){
        return <Outlet />
    }else{
        return <Navigate to="/"/>
    }

};

export default ProtectedRoutes;