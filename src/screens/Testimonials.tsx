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
  return (
    <section className="  py-20">
      <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Apa Kata Mereka?
      </h2>

      <div className="max-w-5xl mx-auto space-y-10 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 border transition-all duration-300"
          >
            {/* Header — Avatar + Name */}
            <div className="flex items-center gap-5 mb-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 leading-relaxed italic text-[15px]">
              “{t.text}”
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
