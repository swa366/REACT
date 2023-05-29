import { IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {  FaShoppingCart} from "react-icons/fa";




const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="navone">
                <div className="navo">
                <h1>Have any questions?</h1>
                <h1> <IoCallOutline/> 001-1234-88888</h1>
                <h1><AiOutlineMail/> info.deercrative@gmail.com</h1>
                </div>
                <div className="navr">Register or Login</div>
            </div>
            <div className="navtwo">
                <div className="navuni">Unic</div>
                <div className="navat">at</div>
                <div className="link">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/courses">Courses</a>
                    <a href="/blog">Blog</a>
                    <a href="/page">Page</a>
                    <a href="/contact">Contact</a>
                    <a><AiOutlineSearch/></a>
                    <a><FaShoppingCart/> </a>                  
               </div>
            </div>
        </div>

     );
}
 
export default Navbar;