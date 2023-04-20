// @ts-nocheck
import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import Header from '../header/header';
import Footer from '../Footer/Footer';
import img1 from './homeImage/1.png';
import img2 from './homeImage/2.png';
import img3 from './homeImage/3.png';
import img4 from './homeImage/4.png';
import img5 from './homeImage/5.png';
import HomeList from './HomeList/HomeList';
import Features from '../features/Features';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
    let id =localStorage.getItem("id");
    id=JSON.parse(id);
    const [data,setHomes]=useState([]);
    async function getData(){
        const url=process.env.REACT_APP_SERVER_URL;
        const response= await fetch(`${url}/`);
        console.log(response);
        const jsonData=await response.json();
        setHomes(jsonData);
    }

    useEffect(()=>{
        getData();
    },[]); 

    return (
        <>
        <Header />
            <main>
                <div className="slider1">
                    <Swiper
                        spaceBetween={1}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={img1} alt=">>>" /></SwiperSlide>
                        <SwiperSlide><img src={img2} alt=">>>" /></SwiperSlide>
                        <SwiperSlide><img src={img3} alt=">>>" /></SwiperSlide>
                        <SwiperSlide><img src={img4} alt=">>>" /></SwiperSlide>
                        <SwiperSlide><img src={img5} alt=">>>" /></SwiperSlide>
                    </Swiper>
                </div>
                <Features />
                <HomeList data={data} id={id} />
                <Footer />
            </main>
        </>

    )
}