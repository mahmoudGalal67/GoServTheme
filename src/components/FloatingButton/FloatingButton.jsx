import "./FloatingButton.css";

import BounceLoader from "react-spinners/BounceLoader";

function FloatingButton() {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(100, 300);
  return (
    <div className="f-button">
      <span>زائر نشط الان</span>
      <span>{rndInt}</span>
      <BounceLoader color="#58BE60" size={30} />
    </div>
  );
}

export default FloatingButton;
