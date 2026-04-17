import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useOutletContext();

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json(),
      ),
    ]).then(([productsData, categoriesData]) => {
      setProducts(productsData);
      setCategories(categoriesData);
      setLoading(false);
    });
  }, []);

  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function removeFromCart(id) {
    const exists = cart.find((item) => item.id === id);
    if (exists.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  }

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <h2 className="text-2xl font-bold my-4 text-center sm:text-left">
        Categories
      </h2>
      <div className="flex gap-2 flex-wrap mb-6 justify-center sm:justify-start">
        <button
          className={
            selectedCategory === "all" ? "category-btn-active" : "category-btn"
          }
          onClick={() => setSelectedCategory("all")}
        >
          all
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              selectedCategory === cat ? "category-btn-active" : "category-btn"
            }
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-4">Products</h2>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => {
            const inCart = cart.find((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="card shadow-md hover:shadow-xl hover:-translate-y-1"
              >
                <figure className="px-4 pt-4 bg-base-300 rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-40 object-contain"
                  />
                </figure>
                <div className="card-body text-center">
                  <h3 className="card-title text-sm ">{product.title}</h3>
                  <p className="font-bold">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(product.price)}
                  </p>
                  <span className="font-bold ">{product.category}</span>
                  {inCart ? (
                    <div className="flex items-center  gap-2 mt-2">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                      <span className="font-bold ">{inCart.quantity}</span>
                      <button
                        className="btn btn-sm btn-warning"
                        onClick={() => removeFromCart(product.id)}
                      >
                        -
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
