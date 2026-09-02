import { redirect, notFound } from "next/navigation";
import { getProductById } from "@/data/products";

// Legacy route. The catalog now lives at /products/[slug]; this keeps any
// old /product-details/:id links (e.g. bookmarked or shared) working by
// redirecting to the canonical slug-based URL instead of 404ing.
export default async function LegacyProductDetailsRedirect({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  redirect(`/products/${product.slug}`);
}
