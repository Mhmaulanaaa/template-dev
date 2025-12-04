import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// HeroTemplate.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function HeroTemplate() {
    const slides = [
        {
            img: "https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Template Premium untuk Website Modern",
            desc: "Bangun landing page, dashboard, dan website profesional dengan desain elegan dan siap pakai.",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1721076216277-22de7111cd06?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "UI Kit Lengkap untuk Proyek Cepat",
            desc: "Komponen siap pakai, desain konsisten, dan layout profesional untuk mempercepat workflow Anda.",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1720534084908-bd8dca31a658?q=80&w=1347&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Desain Minimalis, Performa Maksimal",
            desc: "Dibuat dengan presisi tinggi, responsif di semua perangkat, dan mudah dikustomisasi.",
        },
    ];
    return (_jsx("section", { className: "relative w-full h-[100vh] overflow-hidden", id: "home", children: _jsx(Swiper, { modules: [Autoplay, Pagination], autoplay: { delay: 3500 }, loop: true, pagination: { clickable: true }, className: "w-full h-full", children: slides.map((item, i) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "w-full h-full bg-cover bg-center relative", style: { backgroundImage: `url(${item.img})` }, children: [_jsx("div", { className: "absolute inset-0 bg-black/50" }), _jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-6", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg max-w-3xl", children: item.title }), _jsx("p", { className: "text-white/90 text-lg mt-4 max-w-2xl drop-shadow", children: item.desc }), _jsxs("div", { className: "flex gap-4 mt-8", children: [_jsx("button", { className: "px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-neutral-200 transition", children: "Lihat Template" }), _jsx("button", { className: "px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition", children: "Beli Sekarang" })] })] })] }) }, i))) }) }));
}
