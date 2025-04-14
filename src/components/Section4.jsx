import "./Section4.css";

function Section4() {
  return (
    <div className="section4">
      <h1>What other users say</h1>
      <div className="slider-container">
        <button className="arrow left-arrow">
          <img src="src\assets\images\arrow-left-s-line.png" alt="" />
        </button>
        <div className="box">
          <h3>Placerat feugiat senectus</h3>
          <p>
            Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra
            nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse
            commodo ultrices aenean ultricies.
          </p>
          <div className="detail">
            <img src="src\assets\images\User Thumb.png" alt="" />
            <p>
              <strong>Jane Doe</strong>
              <br />
              Senior Designer
            </p>
          </div>
        </div>
        <button className="arrow right-arrow">
          <img src="src\assets\images\arrow-right-s-line.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Section4;
