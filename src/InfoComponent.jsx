import "./InfoComponent.css";
import "./BorderTest.css";

export default function InfoComponent() {
  return (
    <div className="info-container">
      <div className="InfoComponent">
        <h2>Hello,</h2>
        <h2>
          I'm <span>Ersin</span>
        </h2>
        <h2>A Freelance Web Designer</h2>
        <button className="contact-btn">Contact</button>
      </div>

      <div className="ImageComponent">
        <img src="src/assets/setup.jpg" alt="" />
      </div>
    </div>
  );
}
