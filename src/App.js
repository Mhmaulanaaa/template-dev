import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// App.jsx
import { useState } from "react";
import Navbar from "./screens/Navbar";
import Hero from "./screens/Hero";
import Products from "./screens/Products";
import Testimonials from "./screens/Testimonials";
import PromoBanner from "./screens/PromoBanner";
import Footer from "./screens/Footer";
import About from "./screens/About";
import Contact from "./screens/Contact";
import FAQSection from "./screens/Faq";
export default function App() {
    const [cartCount, setCartCount] = useState(0);
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 font-sans", children: [_jsx(Navbar, { cartCount: cartCount }), _jsx(Hero, {}), _jsx(Products, {}), _jsx(PromoBanner, {}), _jsx(About, {}), _jsx(Contact, {}), _jsx(FAQSection, {}), _jsx(Testimonials, {}), _jsx(Footer, {})] }));
}
