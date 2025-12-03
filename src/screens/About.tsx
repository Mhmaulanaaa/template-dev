import { motion } from "framer-motion";
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

export default function AboutPage() {
  const features = [
    {
      icon: Users,
      label: "5000+ Pengguna",
      desc: "Dipercaya oleh banyak kreator & bisnis.",
    },
    {
      icon: Star,
      label: "Desain Premium",
      desc: "Tampilan elegan & modern siap pakai.",
    },
    {
      icon: Rocket,
      label: "Siap Jalan",
      desc: "Instal → Import → Langsung digunakan.",
    },
    {
      icon: ShieldCheck,
      label: "Kode Bersih & Aman",
      desc: "Struktur rapi, standar industri, mudah dikembangkan.",
    },
    {
      icon: Zap,
      label: "Performa Maksimal",
      desc: "Template ringan & cepat tanpa beban.",
    },
    {
      icon: Palette,
      label: "Mudah Dikustomisasi",
      desc: "Ubah warna, font, layout dalam hitungan menit.",
    },
    {
      icon: Code,
      label: "Developer Friendly",
      desc: "Dibuat mengikuti best practice modern.",
    },
    {
      icon: Headphones,
      label: "Support Responsif",
      desc: "Siap bantu jika ada kendala.",
    },
    {
      icon: Clock,
      label: "Update Berkala",
      desc: "Fitur baru & perbaikan rutin tiap bulan.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-4xl font-extrabold text-center mb-5 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Tentang Kami
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Kami menyediakan template modern, cepat, dan mudah digunakan untuk
          membantu developer, freelancer, dan bisnis tampil lebih profesional.
          Semua template kami dibuat dengan fokus pada kualitas desain,
          performa, dan kemudahan penggunaan.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-6 text-center border"
          >
            <item.icon className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-1">{item.label}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
