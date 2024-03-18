import { render, screen } from "@testing-library/react";
import App from "./App";
describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<App />);
    const element = screen.getByText("Schitt's Creek");
    expect(element).toBeInTheDocument();
  });
});
