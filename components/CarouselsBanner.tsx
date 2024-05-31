"use client";

import { Movie } from "../typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

function CarouselsBanner({ movies }: { movies: Movie[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  return <div>Carousels Banner</div>;
}

export default CarouselsBanner;
