import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EditShort from "../components/edited-short";

describe("EditShort", () => {
  it("renders a heading", () => {
    render(<EditShort />); // ARRANGE

    const heading = screen.getByRole("heading", { level: 1 }); // ACT

    expect(heading).toBeInTheDocument(); // ASSERT
  });

  it("should container the text 'Edited'", () => {
    render(<EditShort />);

    const text = screen.getByText(/Edited/i); // i ignore case sensetive

    expect(text).toBeInTheDocument();
  });
});
