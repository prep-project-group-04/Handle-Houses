import './House.css';
export default function House(props) {
    return (
        <>
            <div className="swiperGroup">
                <img src={props.data.photo} alt='home' />
                <div></div>
            </div>
        </>
    )
}