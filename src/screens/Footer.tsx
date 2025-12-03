import { Facebook, Instagram, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Template Frogs</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Marketplace template modern untuk website, landing page, dashboard,
            dan UI kit. Cepat, rapi, dan siap pakai.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/templates">
                Templates
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="/pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Bantuan</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-white transition" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Panduan Pembelian
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Kebijakan Refund
              </a>
            </li>
            <li>
              <a className="hover:text-white transition" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Connect With Us
          </h4>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            Butuh template custom?
            <a
              href="/contact"
              className="text-white underline hover:text-purple-300 ml-1"
            >
              Hubungi kami
            </a>
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TemplateFrogs. All rights reserved.
      </div>
    </footer>
  );
}
