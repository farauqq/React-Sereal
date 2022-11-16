import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Index from "./pages/Index/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Gallery from "./pages/Gallery/Gallery";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRouter;
