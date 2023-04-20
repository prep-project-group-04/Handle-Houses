import OneCard from "./oneCard";

export default function FavCard(props) {

    return (
        <>
            {props.data.map((element) => {
                return < OneCard data={element} delete={props.delete} update={props.update} />
            })
            }
        </>
    )
}