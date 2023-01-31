import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./hoc/ProtectedRoute";
import Discoverypage from "./pages/Discoverypage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";
import Detailcar from "./pages/Detailcar";
import Editcar from "./pages/Editcar";
import Addcar from "./pages/Addcar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/discovery" element={<Discoverypage />} />
        <Route path="/detailcar/:id" element={<Detailcar />} />
        <Route path="/editcar/:id" element={<Editcar />} />
        <Route path="/addcar" element={<Addcar />} />
      </Route>
    </Routes>
  );
}

export default App;
