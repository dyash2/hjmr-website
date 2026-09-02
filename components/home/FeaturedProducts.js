import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ProductCard from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function FeaturedProducts() {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <section className="bg-[var(--color-background)] py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Bestsellers"
            title="Featured Products"
            description="A snapshot of our most-requested wholesale items."
            className="mx-0"
          />
          <Button href="/products" variant="outline" className="shrink-0">
            View All Products <ArrowRight size={16} />
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
