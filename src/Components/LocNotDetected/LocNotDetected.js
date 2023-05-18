import './locNotDetected.css';
import logo from 'C:\\Users\\singh\\OneDrive\\Desktop\\WEBDEV\\WeatherApp\\weatherapp\\src\\Images\\LoadingPage.gif';

function locNotDetected(props){
    console.log("Inside locNotDetected");
    return (  <div className="locNotDetected">
        <div className="logo">
        <img src={logo}/>
        </div>
        <div className="message">
        <p>{props.message}</p>
        </div>
          
    </div>
    );
}

export default locNotDetected;