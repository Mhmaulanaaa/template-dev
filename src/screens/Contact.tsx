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

  return (
    <section id="contact">
      <div className=" py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-purple-600 font-semibold tracking-wide">
            Butuh Bantuan?
          </span>
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Hubungi Kami Kapan Saja
          </h1>
          <p className="text-gray-600 mb-8">
            Tim kami siap membantu menjawab pertanyaan dan konsultasi Anda.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-4 mb-12">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6  text-center cursor-pointer border border-purple-600"
            >
              <c.icon className={`w-8 h-8 mx-auto mb-3 ${c.color}`} />
              <h4 className="font-semibold text-gray-800">{c.label}</h4>
              <p className="text-sm text-gray-600 mt-1">{c.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-purple-600 "
        >
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Kirim Pesan Langsung
          </h3>

          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium">Nama</label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="Nama lengkap"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-3 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="email@domain.com"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium">Pesan</label>
              <textarea
                className="w-full mt-1 p-3 h-32 border border-purple-600 rounded-xl focus:ring-2 focus:ring-purple-500"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Kirim Pesan
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 text-sm">
            Atau hubungi kami langsung:
            <div className="flex justify-center items-center gap-2 mt-1">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-gray-700">
                +62 812-3456-7890
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
