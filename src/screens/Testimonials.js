import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
const testimonials = [
    {
        id: 1,
        name: "Alya",
        text: "Produk kualitas bagus, pengirimannya cepat!",
        role: "Pelanggan",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
        id: 2,
        name: "Dito",
        text: "Desain webnya kece banget, belanja jadi nyaman.",
        role: "Pelanggan",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
        id: 3,
        name: "Sari",
        text: "Customer service ramah dan sangat membantu.",
        role: "Pelanggan",
        rating: 5,
        avatar: "https://i.pravatar.cc/150?img=45",
    },
];
export default function Testimonials() {
    return (_jsxs("section", { className: "  py-20", children: [_jsx("h2", { className: "text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent", children: "Apa Kata Mereka?" }), _jsx("div", { className: "max-w-5xl mx-auto space-y-10 px-4", children: testimonials.map((t, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: i * 0.15 }, viewport: { once: true }, className: "bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border border-purple-600 transition-all duration-300", children: [_jsxs("div", { className: "flex items-center gap-5 mb-4", children: [_jsx("img", { src: t.avatar, alt: t.name, className: "w-16 h-16 rounded-full object-cover shadow-md" }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-800", children: t.name }), _jsx("p", { className: "text-sm text-gray-500", children: t.role })] })] }), _jsx("div", { className: "flex gap-1 mb-3", children: Array.from({ length: t.rating }).map((_, idx) => (_jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-yellow-400" }, idx))) }), _jsxs("p", { className: "text-gray-700 leading-relaxed italic text-[15px]", children: ["\u201C", t.text, "\u201D"] })] }, i))) })] }));
}
