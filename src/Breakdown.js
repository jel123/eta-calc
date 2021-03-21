import { faWrench, faWeight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';


function Breakdown() {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    fontWeight: "700"
  };

  const icon = {
    marginLeft: "10px"
  }

  return (
    <div className="breakdown-container">
        <h1> Status Breakdown </h1>
          <code style={mystyle}> ON DEVELOPMENT, WILL DEPLOY SOON! 
          
          <FontAwesomeIcon icon={faWrench} style={icon} />
          </code>
    </div>
  );
}

export default Breakdown;
