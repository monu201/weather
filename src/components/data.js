import "./data.css"
import {Link} from "react-router-dom"
import { useEffect,useState } from "react"
const Data=()=>{

    const [q,setq]=useState(true)
    const [unit,setunit]=useState(<i className="ri-celsius-line"></i>)
    const [icon,seticon]=useState( <i className="ri-cloud-windy-line"></i>)
    const [latitud,setlatitude]=useState(28.6667)//
    const[longitud,setlongitude]=useState(77.2167)//
    const[city,setcity]=useState("Delhi")
    const[country,setcountry]=useState("IN")
    const[temp,settemp]=useState(28)
    const[weather,setweather]=useState("clouds")

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
        async (position)=>{
           const ll= await position.coords.latitude;
           const lo=await position.coords.longitude;
       setlatitude(ll)
       setlongitude(lo)
   console.log(ll)
   console.log(lo)
  })
   
},[])

     // useEffect(()=>{fun()},[latitud,longitud])

  
 


    const fun=async()=>{
        try{
           

            const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=f94f78661e4ad9a4590fb6aef48dd2a3`)
            const data=await res.json()
            console.log(data)
        if(data.weather[0].id>199 && data.weather[0].id<300)
        seticon(<i className="ri-thunderstorms-line"></i>)
        else if(data.weather[0].id>299 && data.weather[0].id<500)
        seticon(<i className="ri-drizzle-line"></i>)
        else if(data.weather[0].id>499 && data.weather[0].id<600)
        seticon(<i className="ri-heavy-showers-line"></i>)
        else if(data.weather[0].id>599 && data.weather[0].id<700)
        seticon(<i className="ri-snowy-line"></i>)
        else if(data.weather[0].id>699 && data.weather[0].id<800)
        seticon(<i className="ri-haze-line"></i>)
        else if(data.weather[0].id===800)
        seticon(<i className="ri-haze-line"></i>)
        setcity(data.name)
        setweather(data.weather[0].description)
        setcountry(data.sys.country)
       const t=parseInt(data.main.temp-273)
       settemp(t)
        }
        catch{
            alert("Problem in getting your location try again")

        }
    }

    const change=()=>{


        if(q===true)
        {
            setunit(<i className="ri-fahrenheit-line"></i>)
            settemp(p=>Math.round((p * 9/5) + 32))
            setq(p=>!p)
        }
        else{
            setunit(<i className="ri-celsius-line"></i>)
            settemp(p=>Math.round((p- 32) * 5/9))
            setq(p=>!p)

        }
        

        
           
           

        
    }
    return(
        <div className="x">
          
           {icon}
           <h3>{weather}</h3>
            <h1 className="d-flex justify-content-center">{temp}<button className="changeunit" onClick={change}>{unit}</button></h1>
           <div className="qq">
              <h2>{city},{country}</h2>
           </div>
          <a href="https://www.linkedin.com/in/monish-prasad-952a17206/">By Monish Prasad</a><br></br><br></br>
          <Link to="/" exact><button className="btn btn-primary re">Description</button></Link> 
           
        </div>
      
    )
}

export default Data;