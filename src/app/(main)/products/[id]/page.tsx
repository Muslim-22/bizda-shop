import ProductDetail from "@/src/features/products/components/ProductDetail";
import { getProduct } from "@/src/features/products/services/getProducts";
import { Roboto_Serif } from "next/font/google";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  const imageUrl = product.images?.[0]?.url;
  return {

    title: {
      default: product.name,
      template: "%s | Dealper",
    },
    description: product.description,

    openGraph: {
      type: "website",
      siteName: "Dealport",
      title: product.name,
      description: product.description,
      url: `/products/${id}`,
      images: imageUrl
        ? [
          {
            url: imageUrl,
            alt: product.name,
            width: 500,
            height: 500,
          },
        ]
        : [],
        locale: "uz_UZ"
    },
    twitter: {
      card: "summary",
      title: product.name,
      description: product.description,
    }
  };
}


export default async function page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ProductDetail id={id} />
}
