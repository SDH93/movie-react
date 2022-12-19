import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import MovieDeatil from "./pages/MovieDeatil";
import Movies from "./pages/Movies";

function App() {
    return (
        <div>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/movies" element={<Movies />}></Route>
                <Route path="/movies/:id" element={<MovieDeatil />}></Route>
            </Routes>
        </div>
    );
}

export default App;
