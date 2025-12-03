import { useState } from "react";
import Footer from "./Footer";

const faqs = [
  {
    question: "Apa itu Template Frogs?",
    answer:
      "Template Frogs adalah marketplace template modern untuk website, landing page, dashboard, dan UI kit. Cepat, rapi, dan siap pakai.",
  },
  {
    question: "Bagaimana cara membeli template?",
    answer:
      "Anda bisa memilih template yang diinginkan, klik tombol beli, dan ikuti instruksi pembayaran yang tersedia.",
  },
  {
    question: "Apakah ada kebijakan refund?",
    answer:
      "Ya, kami memiliki kebijakan refund. Silakan baca di halaman Kebijakan Refund untuk info lebih lengkap.",
  },
  {
    question: "Apakah bisa request custom template?",
    answer:
      "Tentu, Anda bisa menghubungi kami melalui tombol Hubungi Kami untuk request template custom.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100 transition"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
