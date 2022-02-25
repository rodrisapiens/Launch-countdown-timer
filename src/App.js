import "./styles/app.css"
import { ReactComponent as Facebook } from "./images/icon-facebook.svg"
import { ReactComponent as Pinterest } from "./images/icon-pinterest.svg"
import { ReactComponent as Instagram } from "./images/icon-instagram.svg"
import { useState, useEffect } from "react"
function App() {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(11);
  const [on,setOn]=useState(true);
  const[halfSeconds,setHalfSeconds]=useState(seconds*2)

  
  const countDown=()=>
  {
    
    const countDate= new Date("feb 27, 2022 00:00:00").getTime();
    const now= new Date().getTime()
    const gap=countDate-now;
    const halfSeconds=500;
    const seconds=halfSeconds*2;
    const minutes=seconds*60;
    const hours=minutes*60;
    const days=hours*24;
    setDays(Math.floor(gap/days));
    setHours(Math.floor((gap%days)/hours));
    setMinutes(Math.floor((gap%days)%hours/minutes))
    setSeconds(Math.floor((gap%days)%hours%minutes/seconds))
    setHalfSeconds(Math.floor((gap%days)%hours%minutes/seconds*2))
    
    
  };
  useEffect(()=>{
    setOn(!on);
    console.log(on)
  },[halfSeconds])
  /* useEffect(() => {
    if (hours === 0) {
      setDays(days- 1);
      setHours(23)
    }
  }, [hours]) */
  
  
  setInterval(countDown,500);
  
  


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
              {days}
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
              {days}
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
        <div className="seconds">
          <div className="secondsCard">
            <div className="semiDotLeft"></div>
            <div className="semiDotRigth"></div>

            <div className="top">
              <h1 className="numberTop">
                {hours}
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
              {hours}
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">{hours-1}</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">{hours-1}</h1>
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
                {minutes}
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
              {minutes}
              </h1>
            </div>
            <div className="backTop">
              <h1 className="backNumberTop">{minutes-1}</h1>
            </div>
            <div className="backBottom">
              <h1 className="backNumberBottom">{minutes-1}</h1>
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

            <div className={on?`topOn`:`top`}>
              <h1 className="numberTop">
              {seconds+1}
              </h1>
            </div>
            <div className="bottom">
              <h1 className="numberBottom">
              {seconds+1}
              </h1>
            </div>
            <div className={on?`backTopOn`:"backTop"}>
              <h1 className="backNumberTop">{seconds}</h1>
            </div>
            <div className={on?"backBottomOn":`backBottom`}>
              <h1 className="backNumberBottom">{seconds}</h1>
            </div>
          </div>
          <h4 className="secondsSubTitle">
            SECONDS
          </h4>

        </div>
      </div>
      <div className="icons">
        <Facebook className="facebook" />
        <Pinterest className="pinterest" />
        <Instagram className="instagram" />


      </div>
    </div>
  );
}

export default App;
