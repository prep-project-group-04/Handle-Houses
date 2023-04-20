// @ts-nocheck
import './House.css';
import { useState } from 'react';
import { useRef } from 'react';
export default function House(props) {
    const comment = useRef();
    const [favorite, setFavorite] = useState(true);
    async function addFav() {
        setFavorite(false);
        let url = `${process.env.REACT_APP_SERVER_URL}/addComment`;
        let data = {
            user_id:props.id, 
            Home_id:props.data.id, 
            comment:comment.current.value
        };
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if (response.status === 201) {
           console.log(response);
        }
    }
    async function remFav() {
        setFavorite(true);
        
        let url = `${process.env.REACT_APP_SERVER_URL}/deleteComment`;
        let data = {
            user_id:props.id, 
            Home_id:props.data.id
        };
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        if (response.status === 201) {
           console.log(response);
        }
    }
    return (
        <>
            <div className="swiperGroup">
                <img src={props.data.photo} alt='home' />
                <span></span>
                <div>
                    <h1>{props.data.address}</h1>
                    <p>The status : {props.data.status}</p>
                    <p>The price : {props.data.price}</p>
                    <section>
                        <article>
                            <i className="fa-solid fa-bed" style={{ 'color': '#1f5125' }} ></i>
                            <p>{props.data.beds}</p>
                        </article>
                        <article>
                            <i className="fa-solid fa-bath" style={{ 'color': '#1f5125' }}></i>
                            <p>{props.data.baths}</p>
                        </article>
                        {favorite ? <i onClick={addFav} class="fa-sharp fa-solid fa-heart" style={{ fontSize: "20px", cursor: "pointer" }}></i> :
                            <i onClick={remFav} class="fa-sharp fa-solid fa-heart" style={{ fontSize: "20px", color: "#ffcc14", cursor: "pointer" }}></i>}
                    </section>
                    <input ref={comment} type="hidden" value="No Comment Yet" />
                </div>
            </div>
        </>
    )
}