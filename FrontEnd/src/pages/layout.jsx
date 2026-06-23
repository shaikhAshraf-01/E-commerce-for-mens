import Navbar from "../components/Navbar"
import {Outlet} from "react-router-dom"
function Layout(){
    return (
         <div className="w-screen min-h-dvh flex flex-col bg-transparent overflow-x-hidden">
            
            {/* Navbar sits safely at the top */}
            <Navbar />
            
            {/* Content area scales perfectly across phone, tablet, and desktop */}
            <main className="flex-1 w-full ">
                <Outlet />
            </main>

        </div>
    )
}
export default Layout;
