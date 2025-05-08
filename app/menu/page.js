"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/cart-context";
import toast from "react-hot-toast";

export default function Menu() {
  const { addToCart } = useCart();
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all"); // all | vegetarian | meat
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { cartItems } = useCart();
  console.log(cartItems);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/foodData");
        if (!res.ok) {
          throw new Error("Hiba történt az adatlekérés során");
        }
        const data = await res.json();
        setFoodData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);
  const filteredData = foodData.filter((item) => {
    if (filter === "vegetarian") return item.vegetarian === true;
    if (filter === "meat") return item.vegetarian === false;
    return true; // "all"
  });

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return (
      <div className="absolute inset-0 flex justify-center items-center bg-gray-200 opacity-75">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }
  return (
    <div>
      <section className="flex mt-6 flex-col items-center justify-center mb-6">
        <div className="flex flex-row justify-center mb-4 gap-4 ">
          <button
            className={`py-2 px-4 font-bold rounded border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 ${
              filter === "all" ? "bg-gray-100" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            Mind
          </button>

          <button
            className={`py-2 px-4 font-bold rounded border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 ${
              filter === "vegetarian" ? "bg-gray-100" : ""
            }`}
            onClick={() => setFilter("vegetarian")}
          >
            Vegetáriánus
          </button>

          <button
            className={`py-2 px-4 font-bold rounded border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 ${
              filter === "meat" ? "bg-gray-100" : ""
            }`}
            onClick={() => setFilter("meat")}
          >
            Húsos
          </button>
        </div>
      </section>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {filteredData.map((item, index) => (
          <li
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
          >
            <div className="flex-grow">
              <h2 className="text-2xl font-semibold">{item.name}</h2>
              <p className="text-gray-700 mt-2">
                <strong>Hozzávalók:</strong> {item.ingredients.join(", ")}
              </p>
            </div>
            <img
              className="w-full h-64 object-cover rounded-lg self-end mt-4"
              src={item.image}
              alt={item.name}
            />
            <p className="text-lg font-semibold mt-4 text-center">
              {item.price} Ft
            </p>
            {selectedIndex === index ? (
              <div className="mt-4 flex  items-center gap-2">
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-20 text-center border border-gray-300 rounded px-2 py-1"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      // Debug üzenet a console-ba

                      console.log(cartItems);
                      addToCart({ ...item, quantity });
                      toast.success("Rendelés hozzáadva a kosárhoz");
                      setSelectedIndex(null); // visszazárás
                    }}
                    className="bg-green-500 hover:bg-green-700 text-white py-1 px-3 rounded"
                  >
                    Megrendelem
                  </button>

                  <button
                    onClick={() => setSelectedIndex(null)}
                    className="bg-gray-400 hover:bg-gray-600 text-white py-1 px-3 rounded"
                  >
                    Mégse
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setSelectedIndex(index);
                  setQuantity(1);
                }}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded hover:shadow-md transition duration-150 ease-in-out"
              >
                Rendeld meg
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
