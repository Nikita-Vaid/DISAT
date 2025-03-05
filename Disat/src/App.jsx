import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Component/Pages/Registration";
import Login from "./Component/Pages/Login";
import Layout from "./Component/Section/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ="/" element ={<Layout/>}>
        <Route path="/" element={<Login/>}/>
        <Route path="iacstexam" element={<Registration/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
