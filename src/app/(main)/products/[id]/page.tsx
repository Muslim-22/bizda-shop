import ProductDetail from "@/src/features/products/components/ProductDetail";
import { getProduct } from "@/src/features/products/services/getProducts";
import { Roboto_Serif } from "next/font/google";


export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);

  const imageUrl = product.images?.[0]?.url;
  console.log(imageUrl)
  return {
    title: product.name,
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
            width: 1200,
            height: 630,
          },
        ]
        : [],
    },
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
