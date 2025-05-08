"use client";
import Link from "next/link";
import { useCart } from "../context/cart-context";
import { usePathname } from "next/navigation";

function FloatingBasket() {
  const { cartItems } = useCart();
  const pathname = usePathname();
  if (cartItems.length === 0 || pathname === "/basket") {
    return null;
  }
  return (
    <div>
      <Link
        href="/basket"
        className="fixed text-sm bottom-12 left-2 bg-[#FF6F61] text-white px-6 py-3 rounded-full shadow-xl hover:bg-[#FF3B2D] z-50 transition duration-300 transform hover:scale-105"
      >
        Kosár megtekintése
        <span> ({cartItems.length} tétel)</span>
      </Link>
    </div>
  );
}

export default FloatingBasket;
