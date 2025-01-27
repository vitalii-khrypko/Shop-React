import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import {RouterProvider} from "react-router-dom";
import router from "./routes/routes";

function App() {

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}/>
      <Footer />
    </div>
  );
}

export default App;