"use client";
import { useCart } from "../context/cart-context";

function Basket() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kosár</h1>
      {cartItems.length === 0 ? (
        <p>A kosár üres.</p>
      ) : (
        <>
          {" "}
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between">
                <div className="flex gap-3">
                  {item.name} ({item.quantity})
                  <p>{item.price * item.quantity} Ft</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600"
                >
                  Törlés
                </button>
              </li>
            ))}
          </ul>
          <h2 className="font-bold border-t-1 border-gray-600">
            Összesen: {total} Ft
          </h2>
        </>
      )}
      {cartItems.length > 0 && (
        <div className="flex gap-2">
          <button
            onClick={clearCart}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-red-700 hover:scale-105 shadow-lg"
          >
            Kosár ürítése
          </button>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded transition duration-300 transform hover:bg-blue-700 hover:scale-105 shadow-lg">
            Megrendelem
          </button>
        </div>
      )}
    </div>
  );
}

export default Basket;
