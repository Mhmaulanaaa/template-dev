import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            question: "Apa itu Template Frogs?",
            answer: "Template Frogs adalah marketplace template modern untuk website, landing page, dashboard, dan UI kit.",
        },
        {
            question: "Bagaimana cara membeli template?",
            answer: "Pilih template, klik tombol beli, dan ikuti instruksi pembayaran.",
        },
        {
            question: "Apakah ada kebijakan refund?",
            answer: "Ya, kami menyediakan kebijakan refund. Silakan cek halaman Refund.",
        },
        {
            question: "Apakah bisa request custom template?",
            answer: "Tentu, Anda bisa menghubungi kami untuk pembuatan template custom.",
        },
    ];
    return (_jsx("section", { id: "faq", children: _jsxs("div", { className: "max-w-4xl mx-auto px-6 py-18", children: [_jsx("h2", { className: "text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent", children: "Frequently Asked Questions ?" }), _jsx("div", { className: "space-y-3", children: faqs.map((faq, index) => (_jsxs("div", { className: "border border-gray-200 rounded-lg bg-white shadow-sm", children: [_jsxs("button", { onClick: () => setOpenIndex(openIndex === index ? null : index), className: "w-full px-6 py-4 flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100", children: [faq.question, _jsx("span", { className: `transform transition-transform ${openIndex === index ? "rotate-180" : ""}`, children: "\u25BC" })] }), openIndex === index && (_jsx("div", { className: "px-6 py-4 text-gray-600 border-t border-gray-200", children: faq.answer }))] }, index))) })] }) }));
}
