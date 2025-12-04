// ProductCard.jsx
import { Star } from "lucide-react";

interface Product {
  img: string;
  name: string;
  category?: string;
  rating?: number;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group p-5 rounded-2xl border border-purple-600 bg-white dark:bg-zinc-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
          Best Seller
        </span>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {product.category || "Template UI Premium"}
        </p>

        <h4 className="font-bold text-lg line-clamp-2">{product.name}</h4>

        {/* Ratings */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < (product.rating || 5)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        <div className="flex justify-between items-center pt-3">
          <span className="text-xl font-extrabold text-purple-600">
            Rp {product.price.toLocaleString()}
          </span>

          <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
            Lihat
          </button>
        </div>
      </div>
    </div>
  );
}
