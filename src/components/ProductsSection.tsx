import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Tools for every money question
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center max-w-lg mx-auto mb-12">
          Free, fast, and built to give you clear answers.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
