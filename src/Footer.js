import React from 'react'
import './index.css';
import logo from './img/logo.png';
import Footercard from './Footercard';
const Footer = () => {
    return (
        <>
           <div className="footer_container">
             <Footercard
             title="EXPERTISE SERVICES"
             elements={['Web Development','Mobile App Development','Software Development',
             'Artificial Intelligence','Digital Marketing','Search Engine Optimization',
             'Data Recovery','Block Chain']}
             />
             <Footercard
             title="INDUSTRY"
             elements={['Manufacturing','Education','ECommerce','Travel & Hospitality',
             'Real Estate','Medical & Entertainment','Courier Management','Logistics Solutions']}
             />
             <Footercard
             title="DISCOVER DELPHINIUM"
             elements={['About us','Careers','Blogs','News & Events','Social Works','Contact Us']}
             />
             <div className="address">
               <div className="footer_card_header">ADDRESS</div>
                 <hr style={{color:"#0000FF",width:"40px",marginLeft:"40px"}}/>
                 <img src={logo}/>
                 <p style={{color:"#fff",fontSize:"15px"}}><span style={{color:"#FF0000"}}>Address : </span>Sector-10,<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 Gurgaon-122001, India<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                BTM Layout,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Bangalore-560076, India</p>

                <p style={{color:"#fff",fontSize:"15px"}}><span style={{color:"#FF0000"}}>Phone : </span>+918872558046<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 +918901453851<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 +919716009205<br/></p>

                 <p style={{color:"#fff",fontSize:"15px"}}><span style={{color:"#FF0000"}}>Email : </span>enquiry@delphiniumsoftech.com</p>
              </div>
             </div> 
           <div className="footer_last">
               <p style={{color:"#fff",marginLeft:"15%"}}>&#169; 2020<span style={{color:"#FF0000"}}> Delphinium Software</span> All Rights Reserved.
               &nbsp;</p>
               <p className="lines"></p>
               <p style={{color:"#FF0000"}}>&nbsp;FAQ&nbsp;</p>
               <p className="lines"></p>
               <p style={{color:"#FF0000"}}>&nbsp;TERMS OF USE&nbsp;</p>
               <p className="lines"></p>
               <p style={{color:"#FF0000"}}>&nbsp;PRIVACY POLICY&nbsp;</p>
               <p className="lines"></p>
               <p style={{color:"#FF0000"}}>&nbsp;SITE MAP</p>
           </div>
        </>
    )
}

export default Footer
