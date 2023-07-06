import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchData } from '../Helper'

export function rootLoader(){
    const username = fetchData("username")
    return {username}
}


const RootLayout = () => {
    const {username} = useLoaderData ()
  return (
    <div className="bg-[#EDF1F7] min-h-screen w-full">
        <Navbar username={username}/>
        <div>
            <Sidebar username={username} />
            <div className="fixed container ml-80 pt-28">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default RootLayout