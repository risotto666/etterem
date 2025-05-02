export default function About() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-brown-800 mb-6">Rólunk</h2>
        <p className="text-lg text-gray-700 mb-8">
          A Bolyhos Étterem szívvel-lélekkel készíti el a legfinomabb ételeket,
          amelyeket szeretettel tálalunk neked. Célunk, hogy minden vendégünk
          jól érezze magát nálunk, és egy igazán különleges gasztronómiai
          élményben részesüljön.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Kép és szöveg */}
          <div className="flex-1">
            <img
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              src="/image.jpeg"
              alt="Bolyhos Étterem belső tér"
            />
          </div>

          <div className="flex-1">
            <p className="text-lg text-gray-700">
              Éttermünket szeretettel és odafigyeléssel alakítottuk ki, hogy
              minden egyes részlet a komfortot és a meghittséget tükrözze. A
              hely, ahol az ízek találkoznak a szeretettel, és ahol mindig
              otthon érzed magad.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Csapatunk mindent megtesz, hogy egyedülálló élményt nyújtson, és
              minden étkezés egy igazi ünnep legyen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
