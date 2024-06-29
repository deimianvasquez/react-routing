import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import Todos from "./views/Todos"
import Navbar from "./component/Navbar"
import Products from "./views/Products"
import Contact from "./views/Contact"
import NotFound from "./views/NotFount"
import ProductDetail from "./component/ProducDetail"

/*
    BrouserRouter --> Envuelve toda mi app para tener disponible routing en la app
    Routes --> Envuelve todas las rutas para saber que mostar
    Route --> Es la ruta en si misma
*/

const Layout = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todos" element={<Todos />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Layout