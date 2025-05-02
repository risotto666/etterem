"use client";
import { useEffect, useState } from "react";

const steps = [
  "Válaszd ki az ételeket",
  "Add meg az adataid (név, cím, telefonszám)",
  "Várd a kiszállítást",
];

export default function OrderSteps() {
  const [visibleSteps, setVisibleSteps] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 1 }
    ); // 50%-os láthatóság szükséges az animáció elindulásához

    const elements = document.querySelectorAll(".step");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-3xl text-slate-700 font-bold mb-8">
        Rendelés menete
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            id={`step-${index}`}
            className={`flex flex-col items-center opacity-0 step ${
              visibleSteps.includes(`step-${index}`) ? "fadeIn" : ""
            }`}
            style={{
              animationDelay: `${index * 400}ms`, // Kis időeltolás minden lépésnél
            }}
          >
            <div className="text-4xl text-red-600 font-bold mb-2">
              {index + 1}
            </div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
