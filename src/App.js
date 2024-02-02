import './App.css';
import { BsEnvelope,BsPlayBtn,BsArrowRight } from "react-icons/bs";
import { FaCertificate,FaFacebookF,FaTwitter,FaLinkedin,FaWhatsapp,FaGooglePlusG,FaStar,FaPlay,FaQuoteRight } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaHandPointRight,FaUniversity } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown,MdOutlineKeyboardArrowLeft,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import logo from "./image/logo.svg";
import course1 from "./image/course1.webp";
import course2 from "./image/course2.webp";
import course3 from "./image/course3.webp";
import course4 from "./image/course4.webp";
import course5 from "./image/course5.webp";
import course6 from "./image/course6.webp";
import about from "./image/about.jpg";
import banner from "./image/1.webp";
import counter1 from "./image/Capture.jpg";
import testi_img from "./image/testimonal_img.jpg";
import testi_img2 from "./image/testimonial.jpg";
import choose1 from "./image/choose1.PNG";
import choose2 from "./image/choose2.PNG";
import choose3 from "./image/choose3.PNG";
import choose4 from "./image/choose4.PNG";
import choose5 from "./image/choose5.PNG";
import choose6 from "./image/choose6.PNG";
import place1 from "./image/place1.png";
import place2 from "./image/place2.png";
import place3 from "./image/place3.png";
import place4 from "./image/place4.png";
import place5 from "./image/place5.png";
import place6 from "./image/place6.png";
import footer_logo from "./image/whitelogo.svg";



function App(){
  return(
    <section className="body">
      {/* top header */}
      <div className="header" id="angle">
        <div className="bgbluecolor">
          <div className="container">
            <div className="main">
            <div className="info">
                        <ul>
                            <li><i><BsEnvelope></BsEnvelope></i> info@gmail.in</li>
                            <li><i><FaCertificate></FaCertificate></i> Verify Certificate</li>
                        </ul>
                    </div>
                    <div className="letter">
                        <ul>
                            <li>HAVE ANY QUESTION? +91 90333 16003</li>
                        </ul>
                    </div>
                    <div className="social">
                        <ul>
                            <li><a href="#" target="_blank"><FaFacebookF></FaFacebookF></a></li>
                            <li><a href="#" target="_blank"><FaTwitter></FaTwitter></a></li>
                            <li><a href="#" target="_blank"><FaGooglePlusG></FaGooglePlusG></a></li>
                            <li><a href="#" target="_blank"><FaLinkedin></FaLinkedin></a></li>
                            <li><a href="#" target="_blank"><ImInstagram></ImInstagram></a></li>
                            <li><a href="#" target="_blank"><BsPlayBtn></BsPlayBtn></a></li>
                            <li><a href="#" target="_blank"><FaWhatsapp></FaWhatsapp></a></li>
                        </ul>
                    </div>
              </div>
            </div>
          </div>
        </div>
        {/* logo header */}
        <div className="header">
          <div className="logo_header">
              <div className="container">
                  <nav>
                      <div className="logo">
                          <a href="header1.html"><img src={logo}></img></a>
                      </div>
                      <div className="navbar">
                        <ul className="main_menu">
                          <li className="active"><a href="#">HOME</a></li>
                          <li><a href="#">COURSES</a></li>
                          <li><a href="#">ACTIVITIES</a><i className="icon"><MdOutlineKeyboardArrowDown ></MdOutlineKeyboardArrowDown></i>
                              <ul className="sub_menu1">
                                  <li><a href="#">Gallery</a></li>
                                  <li><a href="#">Event</a></li>
                              </ul>
                          </li>
                          <li><a href="#">BLOG</a></li>
                          <li><a href="#">KNOW US</a><i><MdOutlineKeyboardArrowDown ></MdOutlineKeyboardArrowDown></i>
                              <ul className="sub_menu">
                                  <li><a href="#">About Us</a></li>
                                  <li><a href="#">Success Stories</a></li>
                                  <li><a href="#">Placement Partners</a></li>
                              </ul>
                          </li>
                          <li><a href="#">GET IN TOUCH</a></li>
                          <li><a href="#">STUDENT ZONE</a><i><MdOutlineKeyboardArrowDown ></MdOutlineKeyboardArrowDown></i>
                              <ul className="sub_menu2">
                                  <li><a href="#">Student Login</a></li>
                                  <li><a href="#">Showcase</a></li>
                              </ul>
                          </li>
                        </ul>
                      </div>
                  </nav>
              </div>
          </div>
        </div>
        {/* banner */}
        <div className="banner">
            <img src={banner}></img>
        </div>
        {/* creative courses */}
        <div className="courses">
           <div className="spacer">
              <div className="container">
                  <div className="heading"></div>
                  <p>CREATIVE COURSE</p>
                  <h2>OFFERED COURSES</h2>
                  <div className="all_courses">
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course1}></img>
                        </div>
                        <h3>Development Courses</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course2}></img>
                        </div>
                        <h3>Design Courses</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course3}></img>
                        </div>
                        <h3>Programming IT</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course4}></img>
                        </div>
                        <h3>Trendy Courses</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course5}></img>
                        </div>
                        <h3>Civil-Mech. Engineering</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                      <div className="single_course">
                        <div className="course_img">
                          <img src={course6}></img>
                        </div>
                        <h3>Business Development</h3>
                        <div className="ranking">
                          <ul>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                            <li><FaStar ></FaStar></li>
                          </ul>
                          <div className="know_more">
                              <span>Know More..!</span>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="view_all_course">
                <span>View All Course <BsArrowRight></BsArrowRight></span>
              </div>
            </div>
        </div>
        {/* About Us */}
        <div className="spacer">
          <div className="about">
              <div className='about1'>
                <div className="about_shape">
                  <div className="container">
                    <div className='heading_about'>
                        <h5>------  ABOUT US</h5>
                    </div>
                    <h3>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h3>
                    <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
                    <div className="enroll_now">
                      <span>Enroll Now..!  <BsArrowRight></BsArrowRight></span>
                    </div>
                  </div>
                </div>
              </div>  
              <div className='about2'>
                    <img src={about}></img>
                    <div className="about2_layer">
                      <span><FaPlay></FaPlay></span>
                    </div>
              </div>
          </div>
        </div>
        {/* counter */}
        <div className="counter">
          <div className="spacer ">
            <div className="counter_item">
              <img src={counter1}></img>
            </div>
          </div>
        </div>
        {/* Testimonial */}
        <div className="testimonial">
          <div className="container">
            <div className="spacer">
                <div className="all_testi">
                  <div className="testimonial1">
                      <div className="heading_about">
                          <p>----- HAPPY STUDENTS</p>
                      </div>
                      <h3>ALUMNI SPEAK</h3>
                      <div className='testimonial_quot'>
                        <div className="testi_button_quot">
                          <p><FaQuoteRight></FaQuoteRight></p>
                        </div>
                        <div >
                          <div className="testimonial_button">
                            <div className='testi_button1'><MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft></div>
                            <div className="testi_button2"><MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight></div>
                          </div>
                        </div>
                      </div>
                      <div className='testimoni_para'>
                        <p>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>
                      </div>
                      <div className='testi_review'>
                        <div className='testi_img'>
                          <img src={testi_img}></img>
                        </div>
                        <div>
                          <h6>KOLADIYA MANSI</h6>
                          <p>UI/UX Designer</p><span> @ Patoliya Infotech</span>
                        </div>
                      </div>
                  </div>
                  <div className="testimonial2">
                      <div>
                        <img src={testi_img2}></img>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* CREATIVE */}
        <div className="creative">
          <div className='bggraycolor'>
            <div className="spacer">
              <div className="container">
                  <div className="heading1"></div>
                  <p>READ OUR DIFFERENCE</p>
                  <h2>WHY CHOOSE CREATIVE</h2>
                  <div className="all_why">
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose1}></img>
                        </div>
                      </div>
                      <h4>Industry Experts As Trainers</h4>
                      <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
                    </div>
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose2}></img>
                        </div>
                      </div>
                      <h4>Latest Curriculum</h4>
                      <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
                    </div>
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose3}></img>
                        </div>
                      </div>
                      <h4>Latest Technology</h4>
                      <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
                    </div>
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose4}></img>
                        </div>
                      </div>
                      <h4>Interview Assistance</h4>
                      <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
                    </div>
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose5}></img>
                        </div>
                      </div>
                      <h4>Free Upgradation</h4>
                      <p>We will be provided free upgradation for any newer version of the course you have.</p>
                    </div>
                    <div className='single_why'>
                      <div className="why_image">
                        <div className='why_img'>
                          <img src={choose6}></img>
                        </div>
                      </div>
                      <h4>Lifetime Support</h4>
                      <p>We will provide you lifetime support on all the courses you learned from us.</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/*placement  */}
        <div className='placement'>
          <div className='spacer'>
            <div className='container'>
              <div className="heading1"></div>
                  <p>STUDENT PLACEMENT</p>
                  <h2>OUR RECRUITMENT PARTNERS</h2>
              <div className='all_brand'>
                <div className='single_brand'>
                  <img src={place1}></img>
                </div>
                <div className='single_brand'>
                  <img src={place2}></img>
                </div>
                <div className='single_brand'>
                  <img src={place3}></img>
                </div>
                <div className='single_brand'>
                  <img src={place4}></img>
                </div>
                <div className='single_brand'>
                  <img src={place5}></img>
                </div>
                <div className='single_brand'>
                  <img src={place6}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Our Demanded Course */}
        <div className='our_course'>
         <div className='container'>
              <p>Our Demanded Course</p><div className='line'></div>
              <div className='course_name'>
                <button>best web development training instiute</button>
                <button>advance angular js training institute in surat</button>
                <button>graphics design training in varachha</button>
                <button>Google sketchup training institute in surat</button>
                <button>spoken english class in adajan</button>
                <button>tally accounting training institute in varachha</button>
                <button>wordpress training institute in varachha </button>
                <button>best python training institute</button>
                <button>autocad mechanical training course</button>
                <button>android training institute in katargam</button>
                <button>adobe xd design training institute in surat</button>
                <button>multimedia training institute in mota varchha</button>
                <button>web development training institute in surat</button>
              </div>
              <span className='show_more'>Show More</span>
          </div>
        </div>
        {/* footer */}
        <footer>
          <div className='bgbluecolor'>
            <div className='spacer'>
              <div className='container'>
                <div className='footer_all'>
                    <div className='footer1'>
                      <div className='footer_img'>
                        <a href='./app.js'><img src={footer_logo}></img></a>
                      </div>
                      <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                      <h4>FOLLOW US ON</h4>
                      <ul className='footer_icon'>
                            <li><a href="#" target="_blank"><FaFacebookF></FaFacebookF></a></li>
                            <li><a href="#" target="_blank"><FaTwitter></FaTwitter></a></li>
                            <li><a href="#" target="_blank"><FaGooglePlusG></FaGooglePlusG></a></li>
                            <li><a href="#" target="_blank"><FaLinkedin></FaLinkedin></a></li>
                            <li><a href="#" target="_blank"><ImInstagram></ImInstagram></a></li>
                            <li><a href="#" target="_blank"><BsPlayBtn></BsPlayBtn></a></li>
                            <li><a href="#" target="_blank"><FaWhatsapp></FaWhatsapp></a></li>
                      </ul>
                    </div>
                    <div className='footer2'>
                      <h3>FEATURE LINKS</h3>
                      <ul className='footer2_links'>
                        <li><a href='#'><FaHandPointRight></FaHandPointRight> About Us</a></li>
                        <li><a href='#'><FaHandPointRight></FaHandPointRight> Blogs</a></li>
                        <li><a href='#'><FaHandPointRight></FaHandPointRight> Join Us</a></li>
                        <li><a href='#'><FaHandPointRight></FaHandPointRight> Company Login</a></li>
                        <li><a href='#'><FaHandPointRight></FaHandPointRight> Certificate Verification</a></li>
                      </ul>
                    </div>
                    <div className='footer3'>
                      <h3>CONTACT US</h3>
                      <h4>HEAD OFFICE - YOGICHOWK</h4>
                      <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                      <p>Mo :<span> +91 90333 16003</span></p>
                      <h4 className='branch'>OTHER BRANCHES</h4>
                      <ul className='footer3_links'>
                        <li><a href='#'><FaUniversity></FaUniversity> Katargam</a></li>
                        <li><a href='#'><FaUniversity></FaUniversity> Mota Varchha</a></li>
                        <li><a href='#'><FaUniversity></FaUniversity> Adajan</a></li>
                        <li><a href='#'><FaUniversity></FaUniversity> Navsari</a></li>
                      </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className='end_footer'>
            <div className='container'>
              <p>&#169; 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
            </div>
          </div>
        </footer>
        {/* angle up */}
        <div className='angle_up'>
          <a href='#angle'><IoIosArrowUp></IoIosArrowUp></a>
        </div>
    </section>
  )
}

export default App;
