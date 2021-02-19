import React from 'react'

function Card_two(props) {
    return (
        <>
        <div className="card_two_head">
          <div className="card_two_body">
             <h1 style={{color:"#FF0000",fontSize:"35px",textAlign:"center"}}>{props.num}</h1>
             <p style={{color:"#fff",fontSize:"20px",textAlign:"center"}}>{props.title}</p>
          </div>
        </div>
        </>
    )
}

export default Card_two

