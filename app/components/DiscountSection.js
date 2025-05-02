export default function DiscountSection() {
  return (
    <section className="bg-yellow-50 py-12 px-6 ">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-6">
          15% Kedvezmény Az Első Rendelésből
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Mostantól az első rendelésednél 15%-os kedvezményben részesülsz! Ne
          hagyd ki, rendelj most és élvezd a finom ételeket még olcsóbban!
        </p>
        <div className="inline-block bg-green-500 text-white text-xl font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition">
          Használd a kódot:{" "}
          <span className="text-lg font-semibold">ELSO15</span>
        </div>
        <div className="opacity-40 bg-white mt-24">
          <p className="text-lg">
            Vásárolj <span className="font-semibold">legalább kettőt</span>{" "}
            ugyanabból az ételből, és az egyikre
            <span className="text-red-600 font-bold">
              {" "}
              10% kedvezményt
            </span>{" "}
            adunk!
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Az akció automatikusan érvényesül a rendelés során.
          </p>
        </div>
      </div>
    </section>
  );
}
