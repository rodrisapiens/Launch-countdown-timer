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
  const [secondsOn, setSecondsOn] = useState(true);
  const [minutesOn, setMinutesOn] = useState({ on: true, number: 0 });
  const [hoursOn, setHoursOn] = useState({ on: true, number: 0 });
  const [daysOn, setDaysOn] = useState({ on: true, number: 0 });
  const [halfSeconds, setHalfSeconds] = useState(seconds * 2)


  const countDown = () => {

    const countDate = new Date("feb 27, 2023 00:00:00").getTime();
    const now = new Date().getTime()
    const gap = countDate - now;
    const halfSeconds = 500;
    const seconds = halfSeconds * 2;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    setDays(Math.floor(gap / days));
    setHours(Math.floor((gap % days) / hours));
    setMinutes(Math.floor((gap % days) % hours / minutes))
    setSeconds(Math.floor((gap % days) % hours % minutes / seconds))
    setHalfSeconds(Math.floor((gap % days) % hours % minutes / seconds * 2))


  };
  useEffect(() => {
    setSecondsOn({ on: !secondsOn.on, number: secondsOn.number });
  }, [halfSeconds])
  useEffect(() => {
    if(seconds===0)
    {
      setMinutesOn({on:true,number:0})
    }
    else
    {
      setMinutesOn({on:false,number:0})
    }
  }, [seconds])
   useEffect(() => {
    if(minutes===0)
    {
      setHoursOn({on:true,number:0})
    }
    else
    {
      setHoursOn({on:false,number:0})
    }
  }, [minutes])
  useEffect(() => {
    if(hours===0)
    {
      setDaysOn({on:true,number:0})
    }
    else
    {
      setDaysOn({on:false,number:0})
    }
  }, [hours])
 
 
setInterval(countDown,500);
 
 


return (
  <div className="app">
    <h1 className="title">WE'RE LAUNCHING SOON </h1>
    <div className="mainColumn" >
      <div className="seconds">
        <div className="secondsCard">
          <div className="semiDotLeft"></div>
          <div className="semiDotRigth"></div>

          <div className={daysOn.on?`topOn`:`top`}>
            <h1 className="numberTop">
            {days}
            </h1>
          </div>
          <div className="bottom">
            <h1 className="numberBottom">
            {days}
            </h1>
          </div>
          <div className={daysOn.on?`backTopOn`:"backTop"}>
            <h1 className="backNumberTop">{days-1===-1?0:days-1}</h1>
          </div>
          <div className={daysOn.on?"backBottomOn":`backBottom`}>
            <h1 className="backNumberBottom">{days-1===-1?0:days-1}</h1>
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

          <div className={hoursOn.on?`topOn`:`top`}>
            <h1 className="numberTop">
              {hours}
            </h1>
          </div>
          <div className="bottom">
            <h1 className="numberBottom">
            {hours}
            </h1>
          </div>
          <div className={hoursOn.on?`backTopOn`:"backTop"}>
            <h1 className="backNumberTop">{hours-1===-1?23:hours-1}</h1>
          </div>
          <div className={hoursOn.on?"backBottomOn":`backBottom`}>
            <h1 className="backNumberBottom">{hours-1===-1?23:hours-1}</h1>
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

          <div className={minutesOn.on?`topOn`:`top`}>
            <h1 className="numberTop">
              {minutes}
            </h1>
          </div>
          <div className="bottom">
            <h1 className="numberBottom">
            {minutes}
            </h1>
          </div>
          <div className={minutesOn.on?`backTopOn`:"backTop"}>
            <h1 className="backNumberTop">{minutes-1===-1?59:minutes-1}</h1>
          </div>
          <div className={minutesOn.on?"backBottomOn":`backBottom`}>
            <h1 className="backNumberBottom">{minutes-1===-1?59:minutes-1}</h1>
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

          <div className={secondsOn.on?`topOn`:`top`}>
            <h1 className="numberTop">
            {seconds}
            </h1>
          </div>
          <div className="bottom">
            <h1 className="numberBottom">
            {seconds}
            </h1>
          </div>
          <div className={secondsOn.on?`backTopOn`:"backTop"}>
            <h1 className="backNumberTop">{seconds-1===-1?59:seconds-1}</h1>
          </div>
          <div className={secondsOn.on?"backBottomOn":`backBottom`}>
            <h1 className="backNumberBottom">{seconds-1===-1?59:seconds-1}</h1>
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
