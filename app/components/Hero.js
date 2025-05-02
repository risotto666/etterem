import { RatingComponent } from "./Rating";

function Hero() {
  return (
    <div className="relative w-full bg-[#08312f] ">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Bal oldal */}
        <div className="relative bg-[#08312f] text-gray-300 flex flex-col justify-center px-10 py-16 z-10">
          <h1 className="text-4xl  md:text-5xl font-bold leading-tight mb-6">
            Prémium étel-házhozszállítás elit szakácsok által, <br /> egyenesen
            az asztalodra
          </h1>
          <p className="mb-6 text-lg text-gray-200">
            Megreformáljuk nem csak az étel házhozszállítás piacát, de a Te
            étrendedet is! Kimagasló minőségű ételeket szállítunk otthonodba,
            prémium alapanyagokból és magas tudású séfek által készítve.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2">
              ✅ Kimagasló színvonalú ételek
            </li>
            <li className="flex items-center gap-2">✅ Minőségi alapanyagok</li>
            <li className="flex items-center gap-2">✅ Pontos kiszállítás</li>
          </ul>
          <div className="md:flex justify-between gap-2 grid ">
            <p className="text-sm italic text-[#f6bba9]">
              *15% kedvezmény első rendelésedre!
            </p>
            <RatingComponent />
          </div>

          {/* Bal alsó sarokba lógó saláta kép */}
          <img
            src="/salata.jpg"
            alt="Saláta"
            className="absolute -bottom-20 -left-10 w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Jobb oldal háttérkép (nem rálógva, csak fél képernyő) */}
        <div className="relative top-20  w-full h-full ">
          <img
            src="/szakacs.jpg"
            alt="Szakács"
            className="w-full h-full opacity-75 object-cover"
          />

          <div className="absolute bottom-0  left-0 right-0 h-32 md:h-64 lg:h-64 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
