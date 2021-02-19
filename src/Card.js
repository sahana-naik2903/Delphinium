import React from 'react';

const Card = (props) => {
    return (
        <>
        <div className="card">
           <div className="card-body">
              <p style={{textAlign:"center",color:"#FF0000"}}>{props.img}</p>
              <h3 style={{textAlign:"center"}}>{props.title}</h3>
              <p style={{textAlign:"justify"}}>{props.desc}</p>
           </div>
        </div>
        </>
    )
}
export default Card;