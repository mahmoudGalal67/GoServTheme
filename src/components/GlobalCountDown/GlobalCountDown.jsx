import Countdown from "react-countdown";

import "./GlobalCountDown.css";

const Finished = () => <span>You are good to go!</span>;
const renderer = ({ total, days, hours, minutes, seconds }) => {
  if (total) {
    // Render a countdown
    return (
      <div className="count-down-wrapper">
        <span className="count-down">
          <span>
            {days} <span>يوم</span>
          </span>
          <span>
            {hours} <span>ساعة</span>
          </span>
          <span>
            {minutes} <span>دقيقة</span>
          </span>
          <span>
            {seconds} <span>ُثانية</span>
          </span>
        </span>
      </div>
    );
  } else {
    // Render a finished state
    return <Finished />;
  }
};

function GlobalCountDown() {
  return (
    <div className="g-countdown">
      <span className="desc">هذا العرض ينتهي في خلال</span>
      <Countdown
        date={Date.now() + 500000000}
        intervalDelay={0}
        precision={3}
        renderer={renderer}
      ></Countdown>
    </div>
  );
}

export default GlobalCountDown;
