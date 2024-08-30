import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./modules/home";
import Demo from "./modules/demo";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Demo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
