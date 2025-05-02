"use client";
import { useEffect, useState } from "react";

export default function MultipyDiscount() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000); // 5 másodperc után megjelenik

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-yellow-100 text-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-md relative text-center">
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
          aria-label="Bezárás"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">🎉 Akciós ajánlat!</h2>
        <p className="text-lg">
          Vásárolj <span className="font-semibold">legalább kettőt</span>{" "}
          ugyanabból az ételből, és az egyikre
          <span className="text-red-600 font-bold"> 10% kedvezményt</span>{" "}
          adunk!
        </p>
        <p className="mt-4 text-sm text-gray-600">
          Az akció automatikusan érvényesül a rendelés során.
        </p>
      </div>
    </div>
  );
}
