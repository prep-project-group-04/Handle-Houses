// @ts-nocheck
import '../AboutUs/AboutUs.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../header/header';
import handlehome from '../../assets/handlehome.png' 
import pictures from '../../assets/profile-pic.png'
import pic2 from '../../assets/maysaa.jpg'
import pic3 from '../../assets/aseel.jpg'
import moath from '../../assets/moath.jpg'
export default function AboutUs() {
    return (<>
           <Header/>
        <section id='AboutUsPage'>

            <nav id='HandleHomeLogo'>
             <img src={handlehome} alt='handleHome img' />
             <p>Thank you for using handleHome, here is our team's information:</p>

            </nav>

            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                <nav id='details'>
                        <img src={pictures} alt='pofile image4' />
                        <p>Name: Eman Obeidat</p>
                        <p>Email: amoonobeidat43@gmail.com</p>
                        <p>Background: Biomedical Engineering</p>
                        <p>For More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/EmanObeidat"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.linkedin.com/in/eman-obeidat-4729231b2/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.facebook.com/amoon.obeidat.796"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.instagram.com/emanmobeidat/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"alt="" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                    <nav id='details'>
                        <img src={moath} alt='pofile imagee' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Electrical power engineer</p>
                        <p>For More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img1"/></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.linkedin.com/in/mo-ath-shakhatreh-0068a0236/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="img2"/></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="img3" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="img4" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                
                <SwiperSlide>
                <nav id='details'>
                        <img src={pic3} alt='pofile imag' />
                        <p>Name: Aseel Bdoor</p>
                        <p>Email: aseel.bdoor2001@gmail.com</p>
                        <p>Background: Information Technology</p>
                        <p>For More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/aseelbdoor"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="img6"/></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.linkedin.com/in/aseel-bdoor-ab809021b/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"alt="img7" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="img8" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"alt="img8" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image1' />
                        <p>Name: Almothana Almasri</p>
                        <p>Email: mothana.almasri.99@gmail.com</p>
                        <p>Background:Electric Power Engineer</p>
                        <p>For More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/almothana-almasri"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"alt="img8" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.linkedin.com/in/al-mothana-al-masri-165249a5/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"alt="img9" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="img10" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"alt="img11" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image2' />
                        <p>Name: Qais Dwairi</p>
                        <p>Email: qaisdw96@hotmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>For More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/qaisdw"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt=""/></Link></nav>
                            <nav id="l"><Link id='l1' to="https://www.linkedin.com/in/qais-al-dwairi/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt=""/></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                
                <SwiperSlide>
                <nav id='details'>
                        <img src={pic2} alt='pofile image5' />
                        <p>Name:Maysa'a Albataineh</p>
                        <p>Email: batainehmaysaa@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/maysaa1992"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png"alt="" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"alt="" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
            </Swiper>
            
        </section>
        <Footer/>
        </>
    )
}