import moment from "moment";
import React, { useState } from "react";
import "../css/digitalClock.css";
const DigitalClock = () => {
  let time = new Date().toLocaleTimeString();
  let date = moment().format("LL");
  const [Dtime, setDtime] = useState(time);
  const [Ddate, setDdate] = useState(date);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setDdate(date);
    setDtime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="timeFrame">
      <div className="date">
        <h4>{date}</h4>
      </div>
      <div className="time">
        <h3>{time}</h3>
      </div>
    </div>
  );
};
export default DigitalClock;
