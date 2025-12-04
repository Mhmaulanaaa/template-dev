import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function Navbar({ cartCount }) {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "products", "about", "contact", "faq"];
            const scrollPos = window.scrollY + 120;
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    if (scrollPos >= element.offsetTop &&
                        scrollPos < element.offsetTop + element.offsetHeight) {
                        setActiveSection(id);
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const [activeSection, setActiveSection] = useState("home");
    return (_jsxs("nav", { className: "fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_2px_12px_rgba(0,0,0,0.08)]", children: [_jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between px-6 py-4", children: [_jsxs("a", { href: "#home", className: "flex items-center gap-2", children: [_jsx("img", { src: "/src/assets/logo/vite.svg", alt: "Logo", className: "h-10 object-contain" }), _jsx("h1", { className: "text-2xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-cyan-500 text-transparent bg-clip-text", children: "Template Frogs" })] }), _jsx("div", { className: "hidden md:flex gap-8 font-medium text-gray-700", children: ["home", "products", "about", "contact", "faq"].map((section) => (_jsx("a", { href: `#${section}`, className: `transition-colors duration-200 ${activeSection === section
                                ? "text-purple-600"
                                : "hover:text-purple-600 text-gray-700"}`, children: section.charAt(0).toUpperCase() + section.slice(1) }, section))) }), _jsxs("div", { className: "hidden md:flex items-center gap-4", children: [_jsxs("button", { className: "relative bg-white/60 backdrop-blur-md p-2 rounded-full border border-gray-200 hover:border-purple-400 transition", children: [_jsx(ShoppingCart, { size: 18, className: "text-gray-700" }), cartCount > 0 && (_jsx("span", { className: "absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full shadow-md", children: cartCount }))] }), _jsx(Button, { className: "bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-md transition-all", children: "Shop Now" })] }), _jsx("button", { onClick: () => setOpen(!open), className: "md:hidden", children: open ? _jsx(X, { size: 28 }) : _jsx(Menu, { size: 28 }) })] }), open && (_jsxs("div", { className: "md:hidden bg-white px-6 pb-4 flex flex-col gap-4 text-lg shadow-inner", children: [_jsx("a", { href: "#hero", onClick: () => setOpen(false), children: "Home" }), _jsx("a", { href: "#about", onClick: () => setOpen(false), children: "About" }), _jsx("a", { href: "#products", onClick: () => setOpen(false), children: "Products" }), _jsx("a", { href: "#contact", onClick: () => setOpen(false), children: "Contact" }), _jsxs("div", { className: "flex items-center gap-4 mt-3", children: [_jsxs("button", { className: "relative bg-white/60 backdrop-blur-md p-2 rounded-full border border-gray-200", children: [_jsx(ShoppingCart, { size: 20 }), cartCount > 0 && (_jsx("span", { className: "absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full", children: cartCount }))] }), _jsx(Button, { className: "bg-purple-600 hover:bg-purple-700 w-full", children: "Shop Now" })] })] }))] }));
}
