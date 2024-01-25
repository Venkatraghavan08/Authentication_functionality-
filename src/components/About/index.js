// Write your JS code here
import "../Header"
import "../LogoutButton"
import "./index.css"

const About=()=>{
    return(
        <Header/>
        <div className="about">
            <h1>About Route</h1>
            <LogoutButton/>
        </div>
    )
}
export default About