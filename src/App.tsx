import "./App.css";
// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Card } from "./components/Cards/Card";
import { MiniCard } from "./components/Cards/MiniCard";
import { Navbar } from "./components/Navbar/Navbar";

// pages
import { Home } from "./pages/Home";
import { PokemonDetailedPage } from "./pages/PokemonDetailedPage";
import { Footer } from "./components/Footer/Footer";
import { FilteredTypePokemonPage } from "./pages/FilteredTypePokemonPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/minicard" element={<MiniCard />} />
                    <Route
                        path="/pokemon/:id"
                        element={<PokemonDetailedPage />}
                    />
                    <Route
                        path="/pokemon/type/:type"
                        element={<FilteredTypePokemonPage />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
