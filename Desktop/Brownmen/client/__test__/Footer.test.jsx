import Footer from "../pages/articles/Footer.js"
import { render, screen } from "@testing-library/react";


test('Check Brownmen title ', () => {
  render(<Footer />);
  const helloWorldElement = screen.getByText(/Brownmen/i);
  expect(helloWorldElement).toBeInTheDocument();
});

test('check only 3 tag',()=>{
  render(<Footer />);
  const helloWorldElement = screen.queryAllByRole("heading");
  expect(helloWorldElement.length).toBe(3);
})
