import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";

export default function ProductsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeIn key={product.name} delay={i * 100}>
              <ProductCard {...product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
