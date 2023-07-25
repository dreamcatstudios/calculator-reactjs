import "./App.css";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <Calculator />
      </div>
      <Footer />
    </>
  );
}

export default App;
