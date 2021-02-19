import React from 'react';
import img from './img/flex.jpg';
import Card from "./Card";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
const Home = () => {
  
    return(
        <>
       
           <div className="back_img"></div>
           <div className="feature">
               <div className="feature1">
               <h1>FEATURED PRODUCTS</h1>
               
               <p className="line1"></p>
               </div>
               <div className="line2"></div>
               <div className="feature2">
               <h2>WEB APPLICATION DEVELOPMENT</h2>
               <p style={{color:"#808080"}}>Build reactive, scalable and real time web applications in a most optimal time frame and investments by leveraging dynamic technologies, 
               modern design patterns and agile methodologies.</p>
               </div>
           </div>
          
          <div className="right-container">
           <Card 
           img={<i class="fas fa-chart-line fa-3x"></i>}
           title="COMPATIBILITY WITH TECHNOLOGY"
           desc="Develop fluidly responsive and performance obsessed web applications"
           />
           <Card 
           img={<i class="fas fa-plane fa-3x"></i>}
           title="BEAT YOUR COMPETITION"
           desc="If you want to start beating your competitors so you need to have a competitive strategy."
           />
           <Card 
           img={<i class="fas fa-laptop-code fa-3x"></i>}
           title="OPTIMIZE WEB EFFORTS"
           desc="Drive qualified traffic to your website and maximize ROI with SEO optimization."
           />
           <Card 
           img={<i class="fas fa-user-clock fa-3x"></i>}
           title="SAVE ON TIME"
           desc="Start accepting orders in minutes & you need to set up your online business website and start selling online."
           />
           </div>

           <div className="back_img1"></div>
           <h3 style={{textAlign:"center",fontSize:"300%"}}>WHAT WE DO</h3>
        <div className="second_container">
           <CardOne
               img={<i class="fas fa-laptop fa-3x"></i>}
               title="WEB DEVELOPMENT"
               desc="We offer comprehensive and efficient web development services that are rooted in creativity and founded in technical expertise"
            />
            <CardOne 
            img={<i class="fas fa-mobile-alt fa-3x"></i>} 
            title="MOBILE APP DEVELOPMENT"
            desc="We focus on combines strategy, and latest technologies, to deliver world-class mobile apps that are compatible with all devices"
            />
            <CardOne
            img ={<i class="fas fa-file-code fa-3x"></i>}
            title="SOFTWARE DEVELOPMENT"
            desc="Delphinium unique engagement models for software product companies and ISVs enables them to focus on your core business"
            />
            </div>
            <div className="second_container">
            <CardOne
            img ={<i class="fas fa-cart-plus fa-3x"></i>}
            title="ECOMMERCE SOLUTIONS"
            desc="Delphinium team provides professional e-Commerce website design, insuring you all round success in managing your online store."
            />
            <CardOne
            img ={<i class="fas fa-ad fa-3x"></i>} 
            title="DIGITAL MARKETING"
            desc="Everyone that wants to refinance does it for a different reason, so we proudly offer multiple refinance solutions."
            />
            <CardOne
            img ={<i class="fas fa-robot fa-3x"></i>}
            title="ARTIFICIAL INTELLIGENCE"
            desc="We create powerful and intelligent solutions that are infused with high-end Artificial Intelligence and self aware of boosting operational efficiency and business growth."
            />
          </div>

           <div className="back_img2">
               <p style={{color:"#fff",fontSize:"30px",padding:"10px",marginLeft:"20px"}}>LETS GET STARTED YOUR PROJECT</p>
               <h3 style={{color:"white",marginLeft:"30px"}}>WE WILL HELP YOU TO ACHIEVE YOUR GOALS AND TO GROW YOUR BUSINESS.</h3>
               <button style={{color:"white",backgroundColor:"red",padding:"10px",marginLeft:"25px"}}>DISCUSS YOUR PROJECT</button>
            </div>
           <div className="row-container">
                   <div className="col">
                       
                   </div>
                   <div className="col1">
                      <h1>WHY DELPHINIUM ?</h1>
                      <h3><b>BECAUSE WE CREATE GREAT FUNCTIONALITY FOR 
                      YOUR BUSINESS</b></h3>
                      <p style={{color:"#888888",textAlign:"justify"}}>Delphinium offer more than one-size-fits-all software. 
                      We work closely with each client to educate ourselves about their business and its 
                      needs. Our approach can help companies with software applications that truly fit. 
                      We create solution with efficiency & perfection.</p>
                      <h3>CUSTOMER FIRST POLICY</h3>
                      <p style={{color:"#888888",textAlign:"justify"}}>We work hard to ensure your success. To do that, we devote 100% of our time and energy towards making clients happy. From the quality of our software products to effectively communicating project benchmarks, 
                      we don’t stop until our clients are satisfied</p>
                      <h3>BECAUSE WE HAVE AN EXPERT STAFF</h3>
                      <p style={{color:"#888888",textAlign:"justify"}}>Our staff believes in prioritizing customer service. Our ability to perform for your business relies on the attention our staff gives to learning your business and its needs, hearing your ideas combine with their 
                      top-notch abilities in implementing great solutions with their skills.</p>
                   </div>
           </div>
           <div className="container_one">
               <CardTwo
                 num = "52"
                 title="Mobile App Developed"
               />
               <CardTwo
               num = "67"
               title="Website Launched"
               />
               <CardTwo
               num = "15"
               title="Daily Coffee"
               />
               <CardTwo
               num = "6"
               title="Experience in Years"
               />
           </div>
       
       </>
    )
}
export default Home;