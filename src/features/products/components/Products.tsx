import Link from "next/link";
import { Product } from "../types/products";
import api from "@/src/services/api/api";
import { getAllProducts } from "../services/getProducts";




const formatPrice = (price: number) =>
  new Intl.NumberFormat("uz-UZ").format(price) + " so'm";


export default async function Products() {
  let products: Product[] = [];
  let error = false;

  console.log(products)

  try {
    products = await getAllProducts();
  } catch (err) {
    console.error("Products API error:", err);
    error = true;
  }

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Mahsulotlarni yuklab bo'lmadi
        </h2>
        <p className="mt-3 text-gray-500">
          Internet yoki server bilan bog'liq muammo bo'lishi mumkin.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-[#4caf7d] px-6 py-3 font-semibold text-white hover:bg-[#399765]"
        >
          Bosh sahifaga qaytish
        </Link>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#4caf7d]">
              Dealport collection
            </p>

            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Barcha mahsulotlar
            </h1>

            <p className="mt-3 text-gray-500">
              O'zingizga kerakli mahsulotlarni kashf eting.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Jami:{" "}
            <strong className="text-gray-900">
              {products.length} ta mahsulot
            </strong>
          </span>
        </div>

        {/* Products */}
        {products.length === 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white px-5 py-20 text-center">
            <p className="text-xl font-semibold text-gray-800">
              Hozircha mahsulotlar mavjud emas
            </p>
            <p className="mt-2 text-gray-500">
              Keyinroq yana tekshirib ko'ring.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {products.map((product) => {
              const mainImage =
                product.images?.find((image) => image.isMain) ??
                product.images?.[0];

              return (
                <article
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:border-green-100 hover:shadow-xl hover:shadow-gray-200/60"
                >
                  {/* Image */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative block overflow-hidden bg-gray-50"
                  >
                    <div className="flex aspect-square items-center justify-center p-4">
                      {mainImage?.url ? (
                        <img
                          src={mainImage.url}
                          alt={mainImage.alt || product.name}
                          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-gray-300">
                          Rasm mavjud emas
                        </div>
                      )}
                    </div>

                    <div className="absolute left-3 top-3 flex flex-col gap-2">
                      {product.discountPercent > 0 && (
                        <span className="rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
                          -{product.discountPercent}%
                        </span>
                      )}

                      {product.isNew && (
                        <span className="rounded-lg bg-[#4caf7d] px-2 py-1 text-xs font-semibold text-white">
                          Yangi
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Product info */}
                  <div className="p-3 sm:p-4">
                    <p className="mb-1 text-xs font-medium text-gray-400">
                      {product.brand?.name || "Brendsiz"}
                      {" · "}
                      {product.category?.name || "Boshqa"}
                    </p>

                    <Link href={`/products/${product.slug}`}>
                      <h2 className="min-h-10 line-clamp-2 text-sm font-semibold leading-5 text-gray-800 transition hover:text-[#399765] sm:text-base">
                        {product.name}
                      </h2>
                    </Link>

                    {/* Rating */}
                    <div className="mt-3 flex items-center gap-1 text-sm">
                      <span className="text-amber-400">★</span>
                      <span className="font-medium text-gray-700">
                        {Number(product.averageRating || 0).toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-400">
                        ({product.reviewsCount || 0})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-3">
                      <p className="text-base font-bold text-gray-900 sm:text-lg">
                        {formatPrice(product.price)}
                      </p>

                      {product.oldPrice != null &&
                        product.oldPrice > product.price && (
                          <p className="mt-1 text-xs text-gray-400 line-through">
                            {formatPrice(product.oldPrice)}
                          </p>
                        )}
                    </div>

                    {/* Details */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="mt-4 flex w-full items-center justify-center rounded-xl bg-[#edf8ee] px-3 py-3 text-sm font-semibold text-[#399765] transition hover:bg-[#4caf7d] hover:text-white"
                    >
                      Mahsulotni ko'rish
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
