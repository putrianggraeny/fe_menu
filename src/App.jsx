import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  const [showFooter, setShowFooter] = useState(false); 

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  return (
    <div>
      <Navbar toggleFooter={toggleFooter} />

      <Homepage />

      {showFooter && <Footer />}
    </div>
  );
}

export default App;