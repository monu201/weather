import {Link} from "react-router-dom"
import "./des.css"
const Des=()=>{
    return(
        
     <>
     <div className="App">
    <span className="header">Free C<i className="ri-cloud-windy-line"></i>deCamp</span><br></br><br></br>
    <span className="header2">Weather App</span>
    <div className="detail-head">
        <h3><i class="ri-article-line"></i>Concept Used</h3>
       <div className="detail">
           <a href="/" className="d-flex justify-content-center"><i className="ri-html5-line"></i>HTML5</a>
           <a href="/" className="d-flex justify-conent-center"><i className="ri-css3-fill"></i>CSS3</a>
           <a href="/" className="d-flex justify-content-center"><i class="ri-reactjs-line"></i>React js</a>
           <a href="/" className="d-flex justify-content-center"><i className="ri-css3-fill"></i>Bootstrap</a>
           <a href="/" className="d-flex justify-content-center"><i class="ri-npmjs-line"></i>Npm</a>
       </div>
            
             Click here:<Link to="/project"><button class="btn btn-primary">Project</button></Link>
    </div>
        </div>
        </>
        )
        
}

export default Des;