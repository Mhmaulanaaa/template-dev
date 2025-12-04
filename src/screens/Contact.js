import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
export default function Contact() {
    const contacts = [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: "Chat Sekarang",
            color: "text-green-600",
        },
        {
            icon: Mail,
            label: "Email",
            value: "support@templatehub.com",
            color: "text-blue-600",
        },
        {
            icon: Instagram,
            label: "Instagram",
            value: "@templatehub",
            color: "text-pink-600",
        },
    ];
    return (_jsx("section", { id: "contact", children: _jsxs("div", { className: " py-12 px-6", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, className: "max-w-2xl mx-auto text-center", children: [_jsx("span", { className: "text-purple-600 font-semibold tracking-wide", children: "Butuh Bantuan?" }), _jsx("h1", { className: "text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent", children: "Hubungi Kami Kapan Saja" }), _jsx("p", { className: "text-gray-600 mb-8", children: "Tim kami siap membantu menjawab pertanyaan dan konsultasi Anda." })] }), _jsx("div", { className: "max-w-3xl mx-auto grid md:grid-cols-3 gap-4 mb-12", children: contacts.map((c, i) => (_jsxs(motion.div, { whileHover: { scale: 1.03 }, className: "bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6  text-center cursor-pointer border border-purple-600", children: [_jsx(c.icon, { className: `w-8 h-8 mx-auto mb-3 ${c.color}` }), _jsx("h4", { className: "font-semibold text-gray-800", children: c.label }), _jsx("p", { className: "text-sm text-gray-600 mt-1", children: c.value })] }, i))) }), _jsxs(motion.div, { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, className: "max-w-lg mx-auto bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-purple-600 ", children: [_jsx("h3", { className: "text-xl font-semibold mb-6 text-center text-gray-800", children: "Kirim Pesan Langsung" }), _jsxs("form", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "text-gray-700 font-medium", children: "Nama" }), _jsx("input", { type: "text", className: "w-full mt-1 p-3 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500", placeholder: "Nama lengkap" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-700 font-medium", children: "Email" }), _jsx("input", { type: "email", className: "w-full mt-1 p-3 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500", placeholder: "email@domain.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "text-gray-700 font-medium", children: "Pesan" }), _jsx("textarea", { className: "w-full mt-1 p-3 h-32 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500", placeholder: "Tulis pesan Anda..." })] }), _jsxs("button", { className: "w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2", children: [_jsx(Send, { className: "w-5 h-5" }), "Kirim Pesan"] })] }), _jsxs("div", { className: "mt-6 text-center text-gray-500 text-sm", children: ["Atau hubungi kami langsung:", _jsxs("div", { className: "flex justify-center items-center gap-2 mt-1", children: [_jsx(MessageCircle, { className: "w-5 h-5 text-green-600" }), _jsx("span", { className: "font-medium text-gray-700", children: "+62 812-3456-7890" })] })] })] })] }) }));
}
