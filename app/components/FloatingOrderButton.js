import Link from "next/link";

export default function FloatingOrderButton() {
  return (
    <Link
      href="/menu"
      className="fixed bottom-12 right-6 bg-red-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-700 z-50"
    >
      RENDELÉS
    </Link>
  );
}
