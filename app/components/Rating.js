import { Rating, RatingStar } from "flowbite-react";

export function RatingComponent() {
  return (
    <Rating>
      <RatingStar />

      <p className="ml-2 text-sm font-bold text-white dark:text-white">4.95</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <p
        href="#"
        className="text-sm  font-medium text-white underline hover:no-underline dark:text-white"
      >
        73 visszaigazolás
      </p>
    </Rating>
  );
}
