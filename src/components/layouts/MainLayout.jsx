import { Outlet } from 'react-router-dom';
import { AuthProvider } from '../../contexts/authContext';

const MainLayout = () => {
    return (
        <AuthProvider>
            <Outlet/>
        </AuthProvider>
    )
}

export default MainLayout