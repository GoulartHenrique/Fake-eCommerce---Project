import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar bg-base-300 text-primary-content px-4">
      <div className="flex-1">
        <Link
          to="/"
          className="btn text-xl hover:bg-gray-300 rounded-2xl font-bold"
        >
          🛍️ Fake Store
        </Link>
      </div>
      <div className="flex-none">
        <Link
          to="/cart"
          className="btn hover:bg-gray-300 rounded-2xl text-lg bg-base-300"
        >
          🛒 Cart
          {totalItems > 0 && (
            <span className="badge bg-white text-black ml-1 ">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
