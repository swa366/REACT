// import { useState } from "react";
import Images from "./Image/course_1.jpg.webp";
import Images1 from "./Image/icon_1.png.png";
import Images2 from "./Image/icon_2.png.png";
import Images3 from "./Image/icon_3.png.png";
import Images4 from "./Image/icon_4.png.png";
import Images5 from "./Image/course_2.jpg.webp";
import Images6 from "./Image/course_3.jpg.webp";
import Images7 from "./Image/event_1.jpg.webp";
import Images8 from "./Image/event_2.jpg.webp";
import Images9 from "./Image/event_3.jpg.webp";
import Images10 from "./Image/team_1.jpg.webp";
import Images11 from "./Image/team_2.jpg.webp";
import Images12 from "./Image/team_3.jpg.webp";
import Images13 from "./Image/team_4.jpg.webp";
import Images14 from "./Image/news_1.jpg.webp";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import{AiOutlineClockCircle} from "react-icons/ai"
import{AiOutlineEnvironment} from "react-icons/ai"
import{FaFacebookF} from "react-icons/fa"
import{FaTwitter} from "react-icons/fa"
import{AiOutlineGooglePlus} from "react-icons/ai"


const Home = () => {
   
    return ( 
        <div>
        <div className="home">

            <div className="permier">The Premium System Education</div>
            <div className="future">Future Of Education Technology</div>
            <div className="form">
            <input className="text" type="text" placeholder="Keyword Search" name="text"/>
            <div className="div1"></div>
            <select className="course" placeholder="Category Courses">
                <option value="category courses">Category Courses</option>
                <option value="category">Category </option>
                <option value="categories">Category </option>
            </select>
            <div className="div1"></div>
            <select  className="price" placeholder="Select Price Type">
                <option value="Select Price Type">Select Price Type</option>
                <option value="Price Type"> Price Type </option>
                <option value="Price Types">Price Type </option>
            </select>
            <button className="button" type="button">Search</button>
          
            </div>
            <div className="button-all">
            <button className="button1" type="button"><AiOutlineLeft/></button>
            <button className="button1" type="button"><AiOutlineRight/></button>
            </div>

            </div>
            <div className="welcome">
                <div>
                <div className="home2">Welcome To Unicat E-Learning</div>
                <div className="home2-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</div>
                </div>
                <div className="welcome1">
                   <div className="expert">
                    <img src={Images1} alt="setting" className="img" />
                    <div className="image1-1">The Experts</div>
                    <div className="image1-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div> 
                    <div className="expert">
                    <img src={Images2} alt="setting" className="img" />
                    <div className="image1-1">Book & Library</div>
                    <div className="image1-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="expert">
                    <img src={Images3} alt="setting"  className="img"/>
                    <div className="image1-1">Best Courses</div>
                    <div className="image1-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                    <div className="expert">
                    <img src={Images4} alt="setting" className="img" />
                    <div className="image1-1">Award & Reward</div>
                    <div className="image1-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>
                </div>
            </div>
            <div  className="home3">
               <div >
                <div className="home3-1">Popular Online Courses</div>
                <div className="home3-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</div>
                </div>
                <div className="home3-3">
                    <div className="software">
                        <img src={Images} alt="course 1" className="img1"/>
                        <a href="/course1" className="software1">Software Training</a>
                        <div className="software2">Mr. John Taylor</div>
                        <div className="software3">Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</div>
                        <div className="line"></div>
                        <div className="icon">
                            <div className="icon1"> <FaGraduationCap className="grade"/>20 Student</div>
                            <div className="icon2"><AiFillStar className="grade"/> 5 Ratings</div>
                            <div className="icon3">$130</div>
                        </div>
                    </div>
                    <div className="software">
                        <img src={Images5} alt="course 5" className="img1"/>
                        <a href="/course1" className="software1">Developing Mobile Apps</a>
                        <div className="software2">Ms. Lucius</div>
                        <div className="software3">Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</div>
                        <div className="line"></div>
                        <div className="icon">
                            <div className="icon1"><FaGraduationCap className="grade"/> 20 Student</div>
                            <div className="icon2"><AiFillStar className="grade"/> 5 Ratings</div>
                            <div className="icon3">Free</div>
                        </div>
                    </div>
                    <div className="software">
                        <img src={Images6} alt="course 6" className="img1"/>
                        <a href="/course1" className="software1">Starting a Startup</a>
                        <div className="software2">Mr. Charles</div>
                        <div className="software3">Lorem ipsum dolor sit amet, consectetur adipi elitsed do eiusmod tempor</div>
                        <div className="line"></div>
                        <div className="icon">
                            <div className="icon1"><FaGraduationCap className="grade"/> 20 Student</div>
                            <div className="icon2"><AiFillStar className="grade"/> 5 Ratings</div>
                            <div className="icon3"><span className="discount">$320</span>$220</div>
                        </div>
                    </div>
                </div>
                <button className="button3">VIEW ALL COURSES</button>
            </div>
           <div className="home4">
                <div className="register">
                    <div className="register1">Register Now</div>
                    <div className="register2">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    
                     <div className="number">
                        <div>15</div>
                        <div>120k</div>
                        <div>670+</div>
                        <div>320</div>
                     </div>
                     <div className="years">
                        <div>YEARS</div>
                        <div>YEARS</div>
                        <div>YEARS</div>
                        <div>YEARS</div>
                     </div>
                     </div>
                     <div className="form10">
                        <div className="heading">COURSES NOW</div>
                        <div className="form11">    
                        <form action="">
                            <div className="gap"><input type="text" placeholder="Your Name:" className="name"/></div>
                            <div className="gap"><input type="text" placeholder="Phone:" className="name"/></div>
                           <div className="gap"> <select name="subject" id="subject" placeholder="Choose Subject" className="subject">
                                <option value="sub">Choose Subject</option>
                                <option value="sub"> Subject</option>
                                <option value="sub"> Subject</option>
                                <option value="sub"> Subject</option>
                            </select></div>
                        <div className="gap"><input type="text" placeholder="Message" className="message"/></div>
                        </form>
                        </div>
                        <div className="button4">
                        <button className="button41">Submit Now</button>
                        </div>
                     </div>
                    
            </div>

            <div className="home5">
            <div className="home50">
                <div className="home51">Upcoming events</div>
                <div className="home52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</div>
            </div>
            <div>
                <div className="event1">
                    <div>
                    <img src={Images7} alt="event1" className="image7" />
                    <div className="all">
                    <div className="calander">
                        <div className="date">21</div>
                        <div className="day">Aug</div>
                    </div>
                    <div className="one">
                    <div className="country1">Which Country Handles Student Debt?</div>
                     <div className="all1">
                    <div className="time1"><AiOutlineClockCircle/>15.00-19.30</div>
                    <div className="city1"><AiOutlineEnvironment/>25 New York City </div>
                    </div>
                    <div className="sen">Policy analysts generally agree on a need for reform, but not on which path...</div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <img src={Images8} alt="event1" className="image7" />
                    <div className="all">
                    <div className="calander">
                        <div className="date">21</div>
                        <div className="day">Aug</div>
                    </div>
                    <div className="one">
                    <div className="country1">Which Country Handles Student Debt?</div>
                    <div className="all1">
                    <div className="time1"><AiOutlineClockCircle/>15.00-19.30</div>
                    <div className="city1"><AiOutlineEnvironment/>25 New York City </div>
                    </div>
                    <div className="sen">Policy analysts generally agree on a need for reform, but not on which path...</div>
                    </div>
                    </div>
                    </div>
                    <div>
                    <img src={Images9} alt="event1" className="image7" />
                    <div className="all">
                    <div className="calander">
                        <div className="date">21</div>
                        <div className="day">Aug</div>
                    </div>
                    <div className="one">
                    <div className="country1">Which Country Handles Student Debt?</div>
                    <div className="all1">
                    <div className="time1"><AiOutlineClockCircle />15.00-19.30</div>
                    <div className="city1"><AiOutlineEnvironment/> New York City </div>
                    </div>
                    <div className="sen">Policy analysts generally agree on a need for reform, but not on which path...</div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
                
            </div>

        <div className="home6">
        <div className="home50">
                <div className="home51">The Best Tutors in Town</div>
                <div className="home52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</div>
            </div>
            <div className="home60">
            <div className="home61">
                <img src={Images10} alt="TEAM1" className="img6"/>
                <div className="home62">
                <div className="name6">Jacke Masito</div>
                <div className="market6">Marketing & Management</div>
                <div className="icon6">
                   <FaFacebookF/>
                   <AiOutlineGooglePlus/>
                   <FaTwitter/> 
                   
                </div>
                </div>
            </div>
            <div className="home61">
                <img src={Images11} alt="TEAM1" className="img6"/>
                <div className="home62">
                <div className="name6">Jacke Masito</div>
                <div className="market6">Marketing & Management</div>
                <div className="icon6">
                   <FaFacebookF/>
                   <FaTwitter/> 
                   <AiOutlineGooglePlus/>
                </div>
                </div>
            </div>
            <div className="home61">
                <img src={Images12} alt="TEAM1" className="img6"/>
                 <div className="home62">
                <div className="name6">Jacke Masito</div>
                <div className="market6">Marketing & Management</div>
                <div className="icon6">
                   <FaFacebookF/>
                   <FaTwitter/> 
                   <AiOutlineGooglePlus/>
                </div>
                </div>
            </div>
            <div className="home61">
                <img src={Images13} alt="TEAM1" className="img6"/>
                <div className="home62">
                <div className="name6">Jacke Masito</div>
                <div className="market6">Marketing & Management</div>
                <div className="icon6">
                   <FaFacebookF/>
                   <FaTwitter/> 
                   <AiOutlineGooglePlus/>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="home7">
        <div className="home50">
                <div className="home51">Latest News</div>
                <div className="home52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel gravida arcu. Vestibulum feugiat, sapien ultrices fermentum congue, quam velit venenatis sem</div>
            </div>
        <div className="home70">
            <div className="home71">
              <img src={Images14} alt="image14" className="img7"/>
              <div className="news01">
              <div className="news0">Here’s What You Need to Know About Online Testing for the ACT and SAT</div>
              <div className="news1">
                <div className="news11">ADMIN</div>
                <div className="news12"></div>
                <div className="news13">NOVEMBER 11, 2017</div>
              </div>
              <div className="news2">Policy analysts generally agree on a need for reform, but not on which path policymakers should take. Can America learn anything from other nations...</div>
              <button className="button7">READ MORE</button>
              </div>
            </div>
            <div className="home72">
                <div className="news31">
            <div className="news0">Here’s What You Need to Know About Online Testing for the ACT and SAT</div>
              <div className="news1">
                <div className="news11">ADMIN</div>
                <div className="news12"></div>
                <div className="news13">NOVEMBER 11, 2017</div>
              </div>
              </div>
              <div className="news31">
            <div className="news0">Here’s What You Need to Know About Online Testing for the ACT and SAT</div>
              <div className="news1">
                <div className="news11">ADMIN</div>
                <div className="news12"></div>
                <div className="news13">NOVEMBER 11, 2017</div>
              </div>
              </div>
              <div className="news31">
            <div className="news0">Here’s What You Need to Know About Online Testing for the ACT and SAT</div>
              <div className="news1">
                <div className="news11">ADMIN</div>
                <div className="news12"></div>
                <div className="news13">NOVEMBER 11, 2017</div>
              </div>
              </div>
              <div className="news32">
            <div className="news0">Here’s What You Need to Know About Online Testing for the ACT and SAT</div>
              <div className="news1">
                <div className="news11">ADMIN</div>
                <div className="news12"></div>
                <div className="news13">NOVEMBER 11, 2017</div>
              </div>
              </div>
            </div>   
        </div>    
        </div>
       <div className="extra"></div>        
    </div>  
       
     );
}
 
export default Home;