import {Route,Switch} from "react-router-dom"
import App1 from "./App1"
import Des from "./components/des"
import Footer from "./components/footer"
import Header from "./components/nav"

const  AA=()=>{
    return(
        <>

        <Header></Header>
        <Switch>

        <div>
        <Route path="/" exact>
            <Des></Des>
        </Route>
        <Route path="/project">
            <App1></App1>
        </Route>
       

        </div>
        </Switch>
        <Footer></Footer>
        </>
        
    )
  
}
export default AA;
