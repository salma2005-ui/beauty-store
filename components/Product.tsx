
import { products } from "../components/Products";

const Product = () => {

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">
          Product Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">

      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        Home / {product.category} / {product.name}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="bg-pink-50 rounded-2xl p-8">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-contain"
          />

        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-pink-500 font-medium tracking-widest">
            {product.category}
          </p>

          {/* Name */}
          <h1 className="text-4xl font-bold mt-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">

            <div className="text-yellow-400">

              {Array(product.rating)
                .fill("⭐")
                .map((star, index) => (
                  <span key={index}>
                    {star}
                  </span>
                ))}

            </div>

            <span className="text-gray-500">
              ({product.rating}/5)
            </span>

          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-6">

            <span className="text-3xl font-bold text-pink-500">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}

            {product.isSale && (
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
                SALE
              </span>
            )}

          </div>

          {/* Description */}
          <p className="text-gray-600 leading-7 mt-6">
            {product.description}
          </p>

          {/* Size */}
          {product.size && (
            <div className="mt-6">

              <span className="font-semibold">
                Size:
              </span>

              <span className="ml-2 text-gray-600">
                {product.size}
              </span>

            </div>
          )}

          {/* Material */}
          {product.material && (
            <div className="mt-3">

              <span className="font-semibold">
                Material:
              </span>

              <span className="ml-2 text-gray-600">
                {product.material}
              </span>

            </div>
          )}

          {/* Shades */}
          {product.shades && (
            <div className="mt-6">

              <h3 className="font-semibold mb-3">
                Choose Shade
              </h3>

              <div className="flex gap-3 flex-wrap">

                {product.shades.map((shade, index) => (

                  <button
                    key={index}
                    className="border border-gray-300 px-4 py-2 rounded-lg hover:border-pink-500 hover:text-pink-500 transition"
                  >
                    {shade}
                  </button>

                ))}

              </div>

            </div>
          )}

          {/* Benefits */}
          <div className="mt-6">

            <h3 className="font-semibold mb-3">
              Benefits
            </h3>

            <ul className="space-y-2 text-gray-600">

              {product.benefits.map((benefit, index) => (

                <li key={index}>
                  ✓ {benefit}
                </li>

              ))}

            </ul>

          </div>

          {/* Stock */}
          <p className="mt-6 text-sm">

            <span className="font-semibold">
              Availability:
            </span>

            <span className="text-green-600 ml-2">
              {product.stock > 0
                ? `${product.stock} items in stock`
                : "Out of stock"}
            </span>

          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <button
              className="flex-1 bg-pink-500 text-white py-4 rounded-xl hover:bg-pink-600 transition"
            >
              🛒 Add to Cart
            </button>

            <button
              className="px-5 border border-gray-300 rounded-xl hover:bg-pink-50 transition"
            >
              ❤️
            </button>

          </div>

        </div>
      </div>

      {/* More Details */}
      <div className="mt-20 border-t pt-10">

        <h2 className="text-2xl font-bold mb-4">
          Product Details
        </h2>

        <p className="text-gray-600 leading-7 max-w-4xl">
          {product.details}
        </p>

        {/* Ingredients */}
        {product.ingredients && (
          <div className="mt-8">

            <h3 className="font-bold mb-2">
              Ingredients
            </h3>

            <p className="text-gray-600">
              {product.ingredients}
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default Product;