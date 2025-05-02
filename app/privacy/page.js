import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Adatvédelmi Szabályzat
      </h1>
      <p className="text-gray-700 mb-6">**Hatályos: 2025. május 2.**</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Az adatkezelő adatai</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Név:</strong> Bolyhos Étterem
          </li>
          <li>
            <strong>Székhely:</strong> 3100 Salgótarján, Fáy András Körút 39.
          </li>
          <li>
            <strong>E-mail:</strong> troli@bolyhosetterem.hu
          </li>
          <li>
            <strong>Telefonszám:</strong> 07476364820
          </li>
          <li>
            <strong>Adószám:</strong> 666
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. Milyen adatokat gyűjtünk?</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Név</li>
          <li>E-mail cím</li>
          <li>Telefonszám</li>
          <li>Cím (rendelés vagy időpontfoglalás esetén)</li>
          <li>Üzenet tartalma (kapcsolatfelvételi űrlap esetén)</li>
          <li>IP-cím, böngésző és eszköz információk (technikai adatok)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. Az adatkezelés célja</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Kapcsolattartás a látogatókkal</li>
          <li>Időpontfoglalás kezelése</li>
          <li>Rendelések feldolgozása és teljesítése</li>
          <li>Jogi kötelezettségek teljesítése (pl. számlázás)</li>
          <li>A weboldal működésének biztosítása és biztonságának növelése</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. Az adatkezelés jogalapja</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Az érintett hozzájárulása (pl. űrlap beküldése)</li>
          <li>Szerződés teljesítése (pl. szolgáltatás megrendelése)</li>
          <li>
            Jogi kötelezettség teljesítése (pl. számlázási adatok megőrzése)
          </li>
          <li>Jogos érdek (weboldal biztonságának fenntartása)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          5. Meddig tároljuk az adatokat?
        </h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Kapcsolatfelvételi adatok: legfeljebb 1 év</li>
          <li>Időpontfoglalás vagy rendelés adatai: 5 év</li>
          <li>Számlázási adatok: 8 év (számviteli törvény szerint)</li>
          <li>IP-cím és technikai adatok: legfeljebb 30 nap</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Ki fér hozzá az adatokhoz?</h2>
        <p className="text-gray-700">
          Személyes adatokat kizárólag a Szolgáltató és az általa megbízott
          adatfeldolgozók kezelhetnek, mint például:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Webtárhely-szolgáltató</li>
          <li>Könyvelő</li>
          <li>E-mail küldő szolgáltatás (pl. SMTP szolgáltató)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">7. Az érintettek jogai</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Az adataihoz való hozzáférés</li>
          <li>Adataik helyesbítése vagy törlése</li>
          <li>Az adatkezelés korlátozása</li>
          <li>Adathordozhatóság</li>
          <li>Vagy tiltakozás az adatkezelés ellen</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">8. Jogorvoslati lehetőségek</h2>
        <p className="text-gray-700">
          Amennyiben az adatkezeléssel kapcsolatban panasza van, fordulhat a
          Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH):
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            <strong>Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
          </li>
          <li>
            <strong>Weboldal:</strong>{" "}
            <a href="https://www.naih.hu" className="text-blue-500">
              https://www.naih.hu
            </a>
          </li>
          <li>
            <strong>Telefonszám:</strong> +36 (1) 391-1400
          </li>
          <li>
            <strong>E-mail:</strong> ugyfelszolgalat@naih.hu
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          9. Sütik (cookie-k) használata
        </h2>
        <p className="text-gray-700">
          A weboldal sütiket használ a felhasználói élmény javítása, valamint
          statisztikai célok érdekében. A sütik használatáról bővebben a „Süti
          tájékoztató” menüpontban olvashat.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">10. Egyéb rendelkezések</h2>
        <p className="text-gray-700">
          A Szolgáltató fenntartja a jogot a jelen szabályzat egyoldalú
          módosítására. A módosítások a weboldalon való közzététellel lépnek
          hatályba.
        </p>
      </section>

      <footer className="mt-6 text-center text-sm text-gray-500">
        <p>**Utoljára frissítve:** 2025. május 2.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
