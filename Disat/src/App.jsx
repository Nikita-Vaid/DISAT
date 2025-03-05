import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Pages/Login";
import Layout from "./Component/Section/Layout";
import RegForm from "./Component/Pages/RegForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ="/" element ={<Layout/>}>
        <Route path="/" element={<Login/>}/>
        <Route path="iacstexam" element={<RegForm/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
