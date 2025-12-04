import {
  Users,
  Star,
  Rocket,
  ShieldCheck,
  Zap,
  Palette,
  Code,
  Headphones,
  Clock,
} from "lucide-react";
import { motion, scale } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: Users,
      label: "5000+ Pengguna",
      desc: "Dipercaya banyak kreator & bisnis.",
    },
    {
      icon: Star,
      label: "Desain Premium",
      desc: "Tampilan modern dan elegan.",
    },
    { icon: Rocket, label: "Siap Jalan", desc: "Instal → Import → Pakai." },
    {
      icon: ShieldCheck,
      label: "Kode Aman",
      desc: "Struktur rapi & standar industri.",
    },
    {
      icon: Zap,
      label: "Performa Tinggi",
      desc: "Ringan dan cepat digunakan.",
    },
    {
      icon: Palette,
      label: "Mudah Custom",
      desc: "Ubah warna & layout dengan cepat.",
    },
    {
      icon: Code,
      label: "Developer Friendly",
      desc: "Mengikuti best practice modern.",
    },
    {
      icon: Headphones,
      label: "Support Cepat",
      desc: "Kami siap membantu kapan saja.",
    },
    {
      icon: Clock,
      label: "Update Rutin",
      desc: "Penambahan fitur setiap bulan.",
    },
  ];

  return (
    <section id="about">
      <div className=" py-18 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Tentang Kami
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kami menyediakan template modern, cepat, dan mudah digunakan untuk
            membantu developer, freelancer, dan bisnis tampil profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-lg rounded-2xl p-6 text-center border border-purple-600"
            >
              <item.icon className="w-12 h-12 mx-auto text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{item.label}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
