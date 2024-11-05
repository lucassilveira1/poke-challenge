import "./App.css";
// react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

// pages
import { Home } from "./pages/Home";
import { PokemonDetailedPage } from "./pages/PokemonDetailedPage";
import { FilteredTypePokemonPage } from "./pages/FilteredTypePokemonPage";
import { FilteredPokemonPage } from "./pages/FilteredPokemonPage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route
                        path={"/pokemon/:id"}
                        element={<PokemonDetailedPage />}
                    />
                    <Route
                        path={"/pokemon/filtered/:id"}
                        element={<FilteredPokemonPage />}
                    />
                    <Route
                        path={"/pokemon/type/:type"}
                        element={<FilteredTypePokemonPage />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
