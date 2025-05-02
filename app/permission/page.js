import React from "react";

const RestaurantPermissions = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Engedélyek az Étterem Üzemeltetéséhez
      </h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Üzemeltetési Engedély</h2>
        <p className="text-gray-700">
          Minden étterem üzemeltetéséhez szükség van a helyi önkormányzat által
          kiadott üzemeltetési engedélyre. Az engedélyek megszerzéséhez
          biztosítani kell, hogy az étterem megfeleljen az egészségügyi és
          biztonsági előírásoknak.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>
            A helyszín megfelelő tisztasági és higiéniai állapotának biztosítása
          </li>
          <li>Az étterem alkalmazottainak élelmiszer-biztonsági képzése</li>
          <li>
            A vendégek és dolgozók biztonságának biztosítása (tűzvédelmi
            szabályok, biztonsági rendszerek)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          2. Élelmiszer-biztonsági Engedély
        </h2>
        <p className="text-gray-700">
          Az éttermeknek élelmiszer-biztonsági engedéllyel kell rendelkezniük,
          amely biztosítja, hogy a szolgáltatott étel megfelel a helyi
          élelmiszer-biztonsági előírásoknak. Ezt az engedélyt az Élelmiszer- és
          Különleges Termékek Felügyelete adja ki.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Rendszeres élelmiszer-biztonsági ellenőrzések</li>
          <li>Higiéniai szabályok betartása a konyhában és az étkezőben</li>
          <li>
            A lejárati idővel rendelkező élelmiszerek megfelelő tárolása és
            kezelése
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">
          3. Alkoholos Italkereskedelmi Engedély
        </h2>
        <p className="text-gray-700">
          Ha az étterem alkoholos italokat kínál, szükséges egy alkoholos
          italkereskedelmi engedély. Ezt az engedélyt az önkormányzatok állítják
          ki, és biztosítja, hogy az alkoholos italok forgalmazása megfelel a
          törvényi előírásoknak.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Alkohol forgalmazásának engedélyezett időpontja</li>
          <li>Alkoholos italok felelősségteljes szolgáltatása</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. Tűzvédelmi Engedély</h2>
        <p className="text-gray-700">
          Minden étteremnek rendelkeznie kell tűzvédelmi engedéllyel, amely
          biztosítja, hogy az étterem megfeleljen a tűzvédelmi előírásoknak. Ez
          magában foglalja a tűzoltó készülékek elhelyezését, az evakuálási
          terveket és a dolgozók tűzvédelmi oktatását.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Evakuálási terv készítése</li>
          <li>Tűzoltó készülékek és rendszerek telepítése</li>
          <li>Alkalmazottak tűzvédelmi képzése</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">5. Munkavédelmi Engedélyek</h2>
        <p className="text-gray-700">
          Az étterem üzemeltetése során be kell tartani a munkavédelmi
          előírásokat is. A munkavédelmi engedélyek biztosítják, hogy az étterem
          dolgozóinak munkakörnyezete biztonságos és egészséges legyen.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Munkavédelmi szabályzatok kialakítása</li>
          <li>A dolgozók munkavédelmi oktatása</li>
          <li>Rendszeres munkavédelmi ellenőrzések</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">6. Adatkezelési Engedély</h2>
        <p className="text-gray-700">
          Ha az étterem személyes adatokat gyűjt (például vásárlók adatai a
          rendeléshez), akkor adatkezelési engedélyre is szükség van. Az
          adatkezelési engedély biztosítja, hogy az étterem megfeleljen az
          adatvédelmi törvényeknek és előírásoknak.
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Adatvédelmi szabályzat készítése</li>
          <li>Az adatkezelés átláthatósága</li>
          <li>A személyes adatok biztonságos kezelése</li>
        </ul>
      </section>

      <footer className="mt-6 text-center text-sm text-gray-500">
        <p>**Utoljára frissítve:** 2025. május 2.</p>
      </footer>
    </div>
  );
};

export default RestaurantPermissions;
