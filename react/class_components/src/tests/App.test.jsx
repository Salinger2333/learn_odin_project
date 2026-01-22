import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../App.jsx";

describe("something truthy and falsy", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

describe("App Component", () => {
  it("render correctly", () => {
    render(<App />);
    const element = screen.getByRole('heading');
    expect(element.textContent).toMatch(/hi/i);
  });
});
