// @ts-nocheck
import '../AboutUs/AboutUs.css'
import React, { useRef, useState } from "react";
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


export default function AboutUs() {
    return (<>
           <Header/>
        <section id='AboutUsPage'>

            <nav id='HandleHomeLogo'>
             <img src={handlehome} alt='handleHome img' />
             <p>Thank you for using handleHome, here is some information about us :</p>

            </nav>


            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <nav id='details'>
                        <img id='ccc' src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
                <SwiperSlide>
                <nav id='details'>
                        <img src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='pofile image' />
                        <p>Name: Mo'ath ahmad</p>
                        <p>Email: moath.shakhatreh@gmail.com</p>
                        <p>Background: Computer Engineering</p>
                        <p>More information:</p>
                        <nav id="logo1">
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://web.facebook.com/?_rdc=1&_rdr"><img src="https://seeklogo.com/images/F/facebook-icon-logo-819DD0A07B-seeklogo.com.png" /></Link></nav>
                            <nav id="l"><Link id='l1' to="https://github.com/Moath-shakhatreh"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" /></Link></nav>

                        </nav>
                    </nav>
                </SwiperSlide>
            </Swiper>
            
        </section>
        <Footer/>
        </>
    )
}