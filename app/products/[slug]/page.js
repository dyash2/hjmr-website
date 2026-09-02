import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | AT-ONE" };
  return {
    title: `${product.name} | AT-ONE Wholesale`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return <ProductDetailClient product={product} related={related} />;
}
