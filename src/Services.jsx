import "./Services.css";
import "./BorderTest.css";

import ServicesComponents from "./ServicesComponents";
import ServicesBigText from "./ServicesBigText";

export default function Services() {
  return (
    <div className="Services">
      <div className="cont-one">
        <ServicesBigText text="Services" />
        <ServicesBigText text="Services" />
      </div>
      <div className="cont-two">
        <ServicesComponents text="WEB DESIGN" />
        <ServicesComponents text="BRANDING" />
        <ServicesComponents text="APP DEVELOPING" />
      </div>
    </div>
  );
}
