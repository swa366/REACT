import{FaFacebookF} from "react-icons/fa"
import{FaTwitter} from "react-icons/fa"
import{AiOutlineGooglePlus} from "react-icons/ai"
import{AiFillInstagram} from "react-icons/ai"
import Imagesa from "./Image/mobile_1.png.webp";
import Imagesb from "./Image/mobile_2.png.webp";

const Footer = () => {
    return ( 
        <div className="footer">
        <div className="footer0">
            <div className="footer1">
                <div className="footer11">SIGN UP FOR NEWS AND OFFERS</div>
                <div className="footer12">Subcribe to lastest smartphones news & great deals we offer</div>
                </div>
                <div className="footer2">
                <input type="text"  placeholder="Your Email"/>
                <button className="buttonf" >SUBSCRIBE</button>
                </div>
        </div>
        <div className="footerall">
          <div className="fone">
             <div className="f11">
             <div className="footer3">
            <div className="footer4">
            <div className="footer41" >
            <div className="footer42">Unic</div>
            <div className="footer43">at</div>
            </div>
            <div className="footer44">Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</div>
            <div className="footer45">
             <button className="btnf"><FaFacebookF className="iconf"/></button>
             <button className="btnf"><FaTwitter className="iconf"/> </button>
             <button className="btnf"><AiFillInstagram className="iconf"/></button>
             <button className="btnf"><AiOutlineGooglePlus className="iconf"/></button>
             </div>
            </div>
            </div>
             </div>

             <div className="f22">
             <div className="contact1">
             <div className="contact0">
    <div className="contact01">Contact Us</div>
    <div className="contact11">Email: Info.deercreative@gmail.com</div>
    <div className="contact11">Phone: +(88) 111 555 666</div>
    <div className="contact11">40 Baria Sreet 133/2 New York City, United States</div>
</div>
</div>
             </div>

             <div className="f33">
             <div className="contactf1">
        <div className="contactf2">Contact Us</div>
        <div className="contactf0">
        <div className="contactf3">
            <div className="con1">Home</div>
            <div className="con1">About</div>
            <div className="con1">Contact</div>
            <div className="con1">Features</div>
        </div>
        <div className="contactf4">
            <div className="con1">Courses</div>
            <div className="con1">Events</div>
            <div className="con1">Gallery</div>
            <div className="con1">FAQs</div>
        </div>
        </div>
        </div>
             </div>

             <div className="f44">
                <div className="mobile">
                    <div className="mobile1">Mobile</div>
                    <div className="imgm">
                    <img src={Imagesa} alt="IMGA" />
                    <img src={Imagesb} alt="imgb" />
                    </div>
                </div>
             </div>
          </div>
          <div className="ftwo">
            <div className="last1">
                <div className="last11">Copyright ©2023 All rights reserved</div>
                <div className="last10"></div>
                <div className="last11">This template is made with  by Colorlib</div>
            </div>

            <div className="last2">
                <div className="last21">Copyright notification</div>
                <div className="last21">Terms of Use</div>
                <div className="last21">Privacy Policy</div>
            </div>
          </div>
          </div>
</div>
     );
}
 
export default Footer;