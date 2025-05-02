const dishes = [
  {
    name: "Carbonara",
    image: "/foods/margherita.jpg",
    price: "2 000 Ft",
  },
  {
    name: "Gulyásleves",
    image: "/foods/gulyas.jpeg",
    price: "2 000 Ft",
  },
  { name: "Cézár saláta", image: "/foods/cezar.jpg", price: "1 500 Ft" },
];

export default function FeaturedDishes() {
  return (
    <section className="py-12 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl text-slate-700 font-bold mb-8">
        Népszerű ételeink
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{dish.name}</h3>
              <p className="text-red-600 font-bold">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
