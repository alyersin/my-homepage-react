import { useState } from "react";

import "./App.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
