import './House.css';
export default function House(props) {
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
                    </section>
                </div>
            </div>
        </>
    )
}