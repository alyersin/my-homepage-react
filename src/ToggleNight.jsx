import "./ToggleNight.css";
import "./BorderTest.css";

export default function ToggleNight() {
  return (
    <label class="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
}
