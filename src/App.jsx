import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Items from "./pages/Items";
import Profiles from "./pages/Profiles";
import SideMenu from "./pages/SideMenu";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen bg-slate-100  text-sm object-cover flex">
        {/* Sider Menu */}
        <SideMenu />
        {/* Content */}
        <div className="w-full h-auto  ml-4 mt-4  text-white">
          <Routes>
            <Route index element={<SignIn />} />
            <Route path="home" element={<Home />} />
            <Route path="user" element={<Profiles />} />
            <Route path="profiles" element={<Profiles />} />
            <Route path="item" element={<Item />} />
            <Route path="items" element={<Items />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
