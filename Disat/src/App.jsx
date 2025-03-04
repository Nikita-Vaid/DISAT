import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Component/Pages/Registration";
import Login from "./Component/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/iacstexam" element={<Registration/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
