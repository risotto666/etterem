"use client";
import React, { useState } from "react";

export default function Contact() {
  const [captcha] = useState("KHMOVP");
  const [inputCaptcha, setInputCaptcha] = useState("");

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Kapcsolatfelvétel</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Bal oldal: információk */}
        <div className="md:w-1/2 space-y-4">
          <p>
            Amennyiben szeretné velünk felvenni a kapcsolatot, megteheti az
            alábbi elérhetőségeinken, vagy töltse ki a kapcsolatfelvételi
            űrlapot.
          </p>
          <p>
            <strong>Cím:</strong>
            <br />
            3100 Salgótarján, Fáy András Körút 39.
            <br />
            <strong>Telefon:</strong>{" "}
            <span className="text-black font-semibold">06-20-212-6622</span>
          </p>
          <p>
            <strong>Rendelésfelvétel:</strong>
            <br />
            Hétfőtől-Szombatig: 9:00 – 18:30
            <br />
            Vasárnap: 9:00 – 15:00
            <br />
            Kiszállítás: 11 órától
          </p>

          {/* Google térkép */}
          <div className="w-full h-64">
            <iframe
              title="Térkép"
              className="w-full h-full rounded"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.833043881619!2d19.793267!3d48.100572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740a0ed9a0db19f%3A0xa7de44d2279b9f48!2sF%C3%A1y%20Andr%C3%A1s%20k%C3%B6rut%2039%2C%203100%20Salg%C3%B3tarj%C3%A1n!5e0!3m2!1shu!2shu!4v1714589678543"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Jobb oldal: űrlap */}

        <div className="md:w-1/2 bg-gray-100 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Üzenetküldés</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Teljes neve"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="E-mail címe"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="tel"
              placeholder="Telefonszáma"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              placeholder="Üzenete"
              rows={4}
              className="w-full p-2 border rounded"
              required
            ></textarea>

            <div>
              <p className="font-mono bg-gray-200 inline-block px-2 py-1 text-lg tracking-widest">
                {captcha}
              </p>
              <input
                type="text"
                placeholder="Vizuális kód bevitele"
                className="w-full p-2 border rounded mt-2"
                value={inputCaptcha}
                onChange={(e) => setInputCaptcha(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white disabled:opacity-25 disabled:cursor-not-allowed px-6 py-2 rounded hover:bg-gray-800"
              disabled={inputCaptcha !== captcha}
            >
              ÜZENETKÜLDÉS
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
