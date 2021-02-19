import React from 'react'

function Footercard(props) {
    return (
        <>
             <div className="footer_card">
                 <div className="footer_cards">
                     <div className="footer_card_header">
                         {props.title}
                     </div>
                     <hr style={{color:"#0000FF",width:"40px",marginLeft:"40px"}}/>
                     <div className="footer_card_body">
                         <ul>
                         <li>{props.elements[0]}</li>
                         <li>{props.elements[1]}</li>
                         <li>{props.elements[2]}</li>
                         <li>{props.elements[3]}</li>
                         <li>{props.elements[4]}</li>
                         <li>{props.elements[5]}</li>
                         <li>{props.elements[6]}</li>
                         <li>{props.elements[7]}</li>
                         </ul>
                     </div>
                 </div>
             </div>
        </>
    )
}

export default Footercard
