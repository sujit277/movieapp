import { render, screen } from "@testing-library/react";
import GenreSelect from "./GenreSelect";
import userEvent from "@testing-library/user-event";

describe("GenreSelect Component", () => {
  const movieData = [
    {
      poster_path:
        "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
      title: "Fifty Shades Freed",
      release_date: "2018-02-07",
      genres: ["Drama", "Romance"],
    },
    {
      poster_path:
        "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      title: "Star Wars: The Last Jedi",
      release_date: "2017-12-13",
      genres: ["Fantasy", "Adventure", "Science Fiction"],
    },
  ];
  test("GenreSelect Component renders with initial value", () => {
    render(<GenreSelect movieData={movieData} />);
    const movieElements = screen.getAllByTestId("movieItem");
    expect(movieElements.length).toBe(movieData.length);
  });

  /* test("onSelect prop is called with proper value", async () => {
    userEvent.setup();
    const onSelectFn = jest.fn();
    const selectedGenre = "Beauty and the Beast";
    render(
      <GenreSelect
        movieData={movieData}
        onSelect={onSelectFn}
        selectedGenre={selectedGenre}
      ></GenreSelect>
    );
    const selectedMovie = screen.findByTestId('selectedmovie');
    expect(selectedMovie).toBeInTheDocument();
  });

  test("genre button component calls onSelect callback and passes correct genre in arguments", async () => {
    userEvent.setup();
    const onSelectFn = jest.fn();
    const selectedGenre = "Beauty and the Beast";
    render(
      <GenreSelect
        movieData={movieData}
        onSelect={onSelectFn}
        selectedGenre={selectedGenre}
      ></GenreSelect>
    );
    const selectedMovieItem = screen.getByTestId('movieItem');
    await userEvent.click(selectedMovieItem);
    expect(onSelectFn).toHaveBeenCalledWith(selectedGenre);
  }); */
});
