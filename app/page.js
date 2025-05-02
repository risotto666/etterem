import AboutSection from "./components/AboutSection";
import CarouselComponent from "./components/Carousel";
import DiscountSection from "./components/DiscountSection";
import EatInOrTakeAway from "./components/EatInOrTakeAway";
import FeaturedDishes from "./components/FeaturedDishes";
import FloatingOrderButton from "./components/FloatingOrderButton";

import Hero from "./components/Hero";
import MultipyDiscount from "./components/MultipyDiscount";

import OrderSteps from "./components/OrderSteps";

export default function Home() {
  return (
    <>
      <Hero />
      <MultipyDiscount />
      <AboutSection />
      <EatInOrTakeAway />
      <OrderSteps />
      <DiscountSection />
      <FeaturedDishes />
      <CarouselComponent />
      <FloatingOrderButton />
    </>
  );
}
