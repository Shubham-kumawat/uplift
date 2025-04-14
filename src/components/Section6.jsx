import React from "react";
import "./Section6.css";
function Section6() {
  return (
    <div className="section6">
      <h2>Frequently asked questions</h2>
      <p>
        Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec
        ornare sed turpis pulvinar <br />
        purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum
        sollicitudin.
      </p>

      <div className="faq-container">
        <div className="faq-item">
          <button className="faq-question">
            <span>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </span>

            <img
              src="src/assets/icons/Vector (Stroke).png"
              alt=""
              className="arrow-icon"
            />
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            <span>
              Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque,
              dolor?
            </span>
            <img
              src="src/assets/icons/Vector (Stroke).png"
              alt=""
              className="arrow-icon"
            />
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            <span>
              Varius ultricies molestie tellus fermentum, viverra ipsum
              scelerisque etiam lorem?
            </span>
            <img
              src="src/assets/icons/Vector (Stroke).png"
              alt=""
              className="arrow-icon"
            />
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            <span>
              Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat
              faucibus?
            </span>
            <img
              src="src/assets/icons/Vector (Stroke).png"
              alt=""
              className="arrow-icon"
            />
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            <span>
              Sagittis consectetur gravida nec turpis eros, id sit et, dictum?
            </span>
            <img
              src="src/assets/icons/Vector (Stroke).png"
              alt=""
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section6;
