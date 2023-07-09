import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css";
import NotFound from "./pages/not-found";

function App() {
    const location = useLocation();
    const showNavbarPaths = ["/"];
    const showNavbar = showNavbarPaths.includes(location.pathname);

    return (
        <>
            {showNavbar && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
