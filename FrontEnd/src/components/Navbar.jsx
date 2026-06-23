import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';
function Navbar(){
    return(
        <div className="w-full h-auto px-7 py-2 flex justify-between items-center">
           <div>
            <h1 className="font-black font-sans text-2xl">URBAN</h1>
            <h3 className="ml-13 mt-[-10px]">MEN</h3>
           </div>
           <div>
            <ul className="flex gap-4.5">
                <li>Home</li>
                <li>Shop</li>
                <li>Categories</li>
                <li>New Arrivals</li>
               
            </ul>
           </div>
           <div>
             <ul className="flex  gap-6.5">
                <li><FiSearch size={20}/></li>
                <li><FiUser size={20}/></li>
                <li><FiHeart size={20}/></li>
                <li><FiShoppingBag size={20}/> </li>
               
            </ul>
           </div>
        </div>
    )
}
export default Navbar;