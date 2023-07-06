import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div className="container mx-auto">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default RootLayout