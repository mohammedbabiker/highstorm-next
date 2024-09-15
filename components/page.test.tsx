import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Components from "./page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Components />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
