import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
      <ToastContainer limit={2}/>
    </>
  );
}

export default App;
