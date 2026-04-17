import { useOutletContext } from "react-router-dom";

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
      <h2 className="text-2xl font-bold my-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <table className="table w-full ">
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
                <td>{item.title}</td>
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
      )}
    </div>
  );
}

export default Cart;
