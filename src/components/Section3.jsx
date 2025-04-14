import "./Section3.css";

function Section3() {
  return (
    <div className="section3">
      <div className="upper">
        <h1>Stories from our users</h1>
        <p>
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </p>
      </div>
      <div className="container">
        <button className="arroww left-arow">
          <img src="../../images/arrow-left-s-line.png" alt="" />
        </button>
        <div className="lower">
          <div className="card">
            <img src="../../images/Picture1.png" alt="" />
            <div className="innerImage">
              <img src="../../images/User Thumb.png" alt="" />
              <p>
                <strong>Flower Decorations</strong>
                <br />
                by Melvina Spring
              </p>
            </div>
          </div>
          <div className="card">
            <img src="../../images/Picture2.png" alt="" />
            <div className="innerImage">
              <img src="../../images/User Thumb2.png" alt="" />
              <p>
                <strong>Flower Decorations</strong>
                <br />
                by Melvina Spring
              </p>
            </div>
          </div>
          <div className="card">
            <img src="../../images/Picture3.png" alt="" />
            <div className="innerImage">
              <img src="../../images/User Thumb3.png" alt="" />
              <p>
                <strong>Splash</strong>
                <br />
                by Rwanda Mellfor
              </p>
            </div>
          </div>

          <div className="card">
            <img src="../../images/Picture4.png" alt="" />
            <div className="innerImage">
              <img src="../../images/User Thumb4.png" alt="" />
              <p>
                <strong>Colorful Face</strong>
                <br />
                by Melvina Spring
              </p>
            </div>
          </div>
        </div>
        <button className="arroww right-arow">
          <img src="../../images/arrow-right-s-line.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Section3;
