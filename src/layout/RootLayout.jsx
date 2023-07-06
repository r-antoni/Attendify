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
            <div className="fixed right-0 px-20 pt-28 w-[calc(100vw-18rem)]">
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default RootLayout