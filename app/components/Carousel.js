"use client";
import { useState, useEffect } from "react";
import { DynaPuff } from "next/font/google";
const dynaPuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export default function CarouselComponent() {
  const texts = [
    "„Fantasztikus élmény volt! A Bolyhos étterem hangulata igazán otthonos, a kiszolgálás pedig kedves és figyelmes. Az ételek frissek, ízletesek, és látszik, hogy szívvel-lélekkel készülnek. Mindenkinek csak ajánlani tudom!”",
    "„Tökéletes hely egy családi ebédhez vagy baráti vacsorához. Az adagok bőségesek, az árak korrektek, a házi limonádé pedig egyszerűen isteni! Már többször jártunk itt, és sosem csalódtunk.”",
    "„A Bolyhos étterem egy igazi gyöngyszem a környéken. A magyaros ételek mellett vannak izgalmas újdonságok is az étlapon. A csülkös tál különösen ajánlott! Barátságos, gyors kiszolgálás, tiszta környezet – nálam öt csillag.”",
    "„Nagyon jó benyomásom volt! Az étterem neve találó – tényleg meleg, bolyhos hangulatot áraszt. A pincérek udvariasak, az étel gyorsan érkezett, és minden falat mennyei volt. Szívesen jövünk vissza!”",
    "„Egyik legjobb ebédem volt mostanában! A levesek kiválóak, a főételek háziasak, mégis különlegesek. Külön dicséret a vegetáriánus választékért! A Bolyhos étterem igazi törzshely lehet bárkinek.”",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Következő szövegre váltás
  const nextText = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  // Előző szövegre váltás
  const prevText = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
    );
  };

  // Automatikus váltás 3 másodpercenként
  useEffect(() => {
    const interval = setInterval(() => {
      nextText();
    }, 5000); // 3000 ms = 3 másodperc

    return () => clearInterval(interval); // Tisztítás a komponens unmount-nál
  }, []);

  return (
    <div className="relative w-full mx-auto mt-12 bg-white rounded-lg md:w-1/2">
      <h1
        className={` text-2xl text-slate-700 font-bold text-center mb-4 md:text-3xl`}
      >
        Vendégvélemények
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {texts.map((text, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-8 text-center bg-white md:p-12"
            >
              <p className={` "text-lg font-bold text-gray-600 md:text-2xl`}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevText}
        className="absolute top-1/2 left-0 transform -translate-y-1/2  text-slate-700 text-3xl px-3 py-1 rounded-full hover:bg-gray-100 md:px-4 md:py-2"
      >
        ‹
      </button>
      <button
        onClick={nextText}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl  text-slate-700 px-3 py-1 rounded-full hover:bg-gray-100 md:px-4 md:py-2"
      >
        ›
      </button>
    </div>
  );
}
