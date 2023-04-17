// @ts-nocheck
import './HomeList.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import House from '../House/House';

export default function HomeList(props){
    
    return(
        <section className='listOfHome'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    props.data.map((element) => {
                        return (
                            <SwiperSlide style={{'position':'static'}}>
                                <House data={element} / >
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}