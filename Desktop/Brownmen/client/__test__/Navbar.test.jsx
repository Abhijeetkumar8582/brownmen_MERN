import Footer from "../pages/articles/Footer.js";
import { render, screen } from "@testing-library/react";
import TEST from "../pages/articles/Searchbar.js";

test('Check if test wriiten or not"', () => {
  render(<TEST />);
  const helloWorldElement = screen.getByText(/test/i);
  expect(helloWorldElement).toBeInTheDocument();
});

test('h1t"', () => {
  render(<TEST />);
  const helloWorldElement = screen.getByText(/hi/i);
  expect(helloWorldElement).toBeInTheDocument();
});

test('h1t"', () => {
  render(<TEST />);
  const helloWorldElement = screen.getByText(/dscd/i);
  expect(helloWorldElement).toBeInTheDocument();
});


