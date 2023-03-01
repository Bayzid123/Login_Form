import "./App.css";
import Routing from "./components/Routing";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routing />
    </>
  );
}

export default App;
