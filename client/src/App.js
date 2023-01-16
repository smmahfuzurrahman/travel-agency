import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotel/:id" element={<List/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
