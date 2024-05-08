import { Genres } from "@/typings";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/discover/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
  console.log(data.genres);

  return <div>genre dropdown</div>;
}

export default GenreDropdown;
