import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App component', () => {
  render(<App />);
  const formElement = screen.getByText(/add a new box/i);
  expect(formElement).toBeInTheDocument();
});
