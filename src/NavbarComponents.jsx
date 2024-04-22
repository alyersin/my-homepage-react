export default function NavbarComponents(props) {
  return (
    <div>
      <a href="" className="logo">
        {props.logo}
      </a>
      <a href="" className="nav-comp">
        {props.text}
      </a>
    </div>
  );
}
