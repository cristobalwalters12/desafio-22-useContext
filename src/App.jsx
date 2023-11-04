import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { APIContextProvider } from "./context/APIcontext";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

const App = () => {
  return (
    <div>
      <APIContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </APIContextProvider>
    </div>
  );
};
export default App;
