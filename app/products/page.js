import { Suspense } from "react";
import ProductsListClient from "./ProductsListClient";

export const metadata = {
  title: "Wholesale Product Catalog | AT-ONE",
  description:
    "Browse the full AT-ONE wholesale catalog — spin mop buckets, accessories, and cleaning solutions manufactured in India.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsListClient />
    </Suspense>
  );
}
