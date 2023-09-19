import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import MyReviews from "./components/MyReviews";
import NoPageFound from "./components/NoPageFound";
import Register from "./components/Register";
import Trending from "./components/Trending";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="my-reviews" element={<MyReviews />} />
          <Route path="trending" element={<Trending />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);