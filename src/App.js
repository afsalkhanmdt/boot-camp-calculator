import "./App.css";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import Todo from "./Todo";
import Home from "./Home";
import Tasks from "./Tasks";

function App() {


  return <div className="App">
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="todo" element={<Todo/>} />
      <Route path="calculator" element={<Calculator/>} />
      <Route path="tasks" element={<Tasks/>} />
    </Routes>
  </div>;
}

export default App;
