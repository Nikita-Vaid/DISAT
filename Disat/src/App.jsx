import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Component/Pages/Registration";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
