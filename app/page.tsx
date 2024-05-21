import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const TopRatedMovies = await getTopRatedMovies();
  const PopularMovies = await getPopularMovies();

  return (
    <main className="">
      <div className="flex flex-col space-y-2 xl:-mt-48 ">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={TopRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={PopularMovies} title="Popular" />
      </div>
    </main>
  );
}
