import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useOutletContext();

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

  function addToCart(id) {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-10 ml-2.5">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 mt-5">Your cart is empty.</p>
      ) : (
        <>
          {/* Cards no mobile */}
          <div className="flex flex-col gap-4 md:hidden mt-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="card bg-base-200 p-4 flex flex-row gap-4 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-sm">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </p>
                  <p className="text-sm">
                    Subtotal:{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price * item.quantity)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="btn btn-sm bg-base-300"
                      onClick={() => addToCart(item.id)}
                    >
                      +
                    </button>
                    <span className="font-bold">{item.quantity}</span>
                    <button
                      className="btn btn-sm text-black bg-white"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-right font-bold text-lg pr-2">
              Total:{" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(total)}
            </div>
          </div>

          {/* Tabela no desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr className="text-white">
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 object-contain"
                        />
                        <span>{item.title}</span>
                      </div>
                    </td>
                    <td>
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(item.price)}
                    </td>
                    <td>{item.quantity}</td>
                    <td>
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(item.price * item.quantity)}
                    </td>
                    <td className="flex gap-2">
                      <button
                        className="btn btn-sm bg-base-300"
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-sm text-black bg-white"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="text-white">
                  <td colSpan="3" className="font-bold text-right">
                    Total:
                  </td>
                  <td className="font-bold">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(total)}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="mt-6 ml-4">
            <Link
              to="/"
              className="btn bg-base-300 hover:bg-gray-300 hover:text-black rounded-2xl"
            >
              🛍️ Back to Store
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
