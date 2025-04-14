import "./Section1.css";

function Section1() {
  return (
    <div className="section1">
      <div className="top">
        <h1>It's time to take a break</h1>
        <p>
          Build your meditation skills with an app that gives you all you need!
        </p>
        <input type="text" placeholder="Enter your name" />
        <button>Start Now</button>
      </div>
      <div className="bottom">
        <img src="../../images/Picture.png" alt="" />
      </div>
    </div>
  );
}

export default Section1;
