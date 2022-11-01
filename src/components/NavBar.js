






////////Ahmed///////
import { FaHouseUser, FaList } from 'react-icons/fa';
import { ImPriceTags } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
    return (

      
      //Ahmed//Navigation for mobile layout max 450px & for desktop min 450px 
        <div>
     
              <nav className='nav1'>
            <NavLink to="/home" end>
          <FaHouseUser size={30}/>
            </NavLink>
            <NavLink to="/list"><FaList size={30}/></NavLink> 
            <NavLink to="/discount"><ImPriceTags size={30}/></NavLink>
            <NavLink to="/profile"><BiUser size={30}/></NavLink>
        </nav>
        <nav className='nav2'>
            <NavLink to="/home" end>
            Home
            </NavLink>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/discount">Discount</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </nav>


       

</div>
        
);
}