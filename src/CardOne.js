import React from 'react'

const onMouseOver = event =>{
    const el = event.target;
    el.style.color = "#FF0000";
}
const onMouseOut = event =>{
    const el = event.target;
    el.style.color = "#000000";
}
function Card_one(props) {
    return (
        <>
            <div className="card_one">
                <div className="card_body_one">
                    <p style={{color:"#FF0000",textAlign:"center"}}>{props.img}</p>
                    <h3 onMouseEnter={event=>onMouseOver(event)}
                    onMouseOut={event=>onMouseOut(event)}>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </>
    )
}

export default Card_one;
