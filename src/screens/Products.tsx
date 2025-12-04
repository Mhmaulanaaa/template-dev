// Products.jsx
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Landing Page Modern – React + Tailwind",
    category: "React Template",
    rating: 5,
    price: 99000,
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 2,
    name: "Dashboard Admin – Vue + API Ready",
    category: "Dashboard Template",
    rating: 5,
    price: 129000,
    img: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 3,
    name: "Mobile UI Kit – 120+ Screens",
    category: "UI/UX Figma Template",
    rating: 4,
    price: 159000,
    img: "https://plus.unsplash.com/premium_photo-1683288537078-a04cc87545f6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Next.js SaaS Landing Page",
    category: "Next.js Template",
    rating: 5,
    price: 149000,
    img: "https://plus.unsplash.com/premium_vector-1682309081920-d2725d3e620c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "E-Commerce UI Kit – Mobile + Web",
    category: "Figma Template",
    rating: 4,
    price: 139000,
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 6,
    name: "Dark Mode Admin Dashboard",
    category: "Dashboard Template",
    rating: 5,
    price: 169000,
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 7,
    name: "Portfolio Developer – React + GSAP",
    category: "React Template",
    rating: 5,
    price: 109000,
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 8,
    name: "Restaurant Landing – Next.js + Tailwind",
    category: "Next.js Template",
    rating: 4,
    price: 119000,
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 9,
    name: "Learning App UI – 80+ Screens",
    category: "Figma Mobile UI",
    rating: 5,
    price: 159000,
    img: "https://plus.unsplash.com/premium_photo-1720551256879-92e5b13285be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "CRM Admin Dashboard – Vue 3",
    category: "Dashboard Template",
    rating: 5,
    price: 179000,
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&h=300",
  },
  {
    id: 11,
    name: "Business Landing Page – HTML + Tailwind",
    category: "Landing Page",
    rating: 4,
    price: 89000,
    img: "https://plus.unsplash.com/premium_photo-1681487729805-91f220c7da25?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Travel App UI – 100+ Screens",
    category: "Mobile UI Kit",
    rating: 5,
    price: 169000,
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=500&h=300",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto"
    >
      <h3 className="text-4xl font-extrabold text-center mb-5 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Template Premium Unggulan
      </h3>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Koleksi template modern dan berkualitas tinggi yang siap pakai untuk
        website, landing page, dashboard, dan aplikasi bisnis Anda.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
