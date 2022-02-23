import "./styles/app.css"
import {ReactComponent as Facebook} from "./images/icon-facebook.svg"
import {ReactComponent as Pinterest} from "./images/icon-pinterest.svg"
import {ReactComponent as Instagram} from "./images/icon-instagram.svg"
function App() {
  return (
    <div className="app">
      <h1 className="title">WE'RE LAUNCHING SOON </h1>
      <div className="mainColumn" >
        <div className="seconds">
          <div className="secondsCard">
            <div className="semiDotLeft"></div>
            <div className="semiDotRigth"></div>

            <div className="top">
              <h1 className="numberTop">
                1
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
                1
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">2</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">2</h1>
            </div>
          </div>
          <h4 className="secondsSubTitle">
            SECONDS
          </h4>

        </div>
        <div className="seconds">
          <div className="secondsCard">
            <div className="semiDotLeft"></div>
            <div className="semiDotRigth"></div>

            <div className="top">
              <h1 className="numberTop">
                1
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
                1
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">2</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">2</h1>
            </div>
          </div>
          <h4 className="secondsSubTitle">
            MINUTES
          </h4>

        </div>
        <div className="seconds">
          <div className="secondsCard">
            <div className="semiDotLeft"></div>
            <div className="semiDotRigth"></div>

            <div className="top">
              <h1 className="numberTop">
                1
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
                1
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">2</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">2</h1>
            </div>
          </div>
          <h4 className="secondsSubTitle">
            HOURS
          </h4>

        </div>
        <div className="seconds">
          <div className="secondsCard">
            <div className="semiDotLeft"></div>
            <div className="semiDotRigth"></div>

            <div className="top">
              <h1 className="numberTop">
                1
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
                1
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">2</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">2</h1>
            </div>
          </div>
          <h4 className="secondsSubTitle">
            DAYS
          </h4>

        </div>
      </div>
      <div className="icons">
        <Facebook className="facebook"/>
        <Pinterest className="pinterest"/>
        <Instagram className="instagram"/>
        
        
      </div>
    </div>
  );
}

export default App;
