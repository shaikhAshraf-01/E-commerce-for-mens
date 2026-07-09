import Navbar from "../components/Navbar";
import {Outlet} from "react-router-dom";
import Bottom from "../components/Bottom";
function Layout(){
    return (
         <div className="w-full min-h-dvh flex flex-col bg-transparent ">
            
            {/* Navbar sits safely at the top */}
            <Navbar />
            <div className="h-[8px] md:h-[10px]"></div>
            {/* Content area scales perfectly across phone, tablet, and desktop */}
            <main className="flex-1 w-full ">
                <Outlet />
            </main>
            <Bottom/>

        </div>
    )
}
export default Layout;
