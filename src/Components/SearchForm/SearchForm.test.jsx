import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

describe("SearchForm Component", () => {
  test("SearchBox renders with default initial value", () => {
    render(<SearchForm searchValue="Beauty and the Beast" />);
    const SearchBox = screen.getByRole("textbox");
    expect(SearchBox).toBeInTheDocument();
  });

  test("onSearch prop is called with proper value", async () => {
    userEvent.setup();
    const onSearchFn = jest.fn();
    render(
      <SearchForm searchValue={"Beauty and the Beast"} onSearch={onSearchFn} />
    );
    const submitButton = screen.getByRole("button", { name: "Search" });
    await userEvent.click(submitButton);
    expect(onSearchFn).toHaveBeenCalledWith("Beauty and the Beast");
  });

  /* test("onSearch prop is called with proper value on Enter Press on Input box", async () => {
    userEvent.setup();
    const onSearchFn = jest.fn();
    render(
      <SearchForm searchValue={"Beauty and the Beast"} onSearch={onSearchFn} />
    );
    const searchBox = screen.getByRole("textbox");
    await userEvent.type(searchBox, "Beauty and the Beast");
    expect(onSearchFn).toHaveBeenCalledWith("Beauty and the Beast");
  }); */
});
