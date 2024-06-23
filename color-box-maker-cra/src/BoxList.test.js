import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke test
test('renders without crashing', () => {
  render(<BoxList />);
});

// Snapshot test
test('matches snapshot', () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can add a new box', () => {
  render(<BoxList />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText('Height'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('Width'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('Background Color'), { target: { value: 'red' } });

  // Submit the form
  fireEvent.click(screen.getByText('Add a new box!'));

  // Check if the box is in the document
  const newBox = screen.getByTestId('box');
  expect(newBox).toBeInTheDocument();
  expect(newBox).toHaveStyle(`width: 100px`);
  expect(newBox).toHaveStyle(`height: 100px`);
  expect(newBox).toHaveStyle(`background-color: red`);
});

test('can remove a box', () => {
  render(<BoxList />);

  // Fill out the form
  fireEvent.change(screen.getByLabelText('Height'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('Width'), { target: { value: '100' } });
  fireEvent.change(screen.getByLabelText('Background Color'), { target: { value: 'red' } });

  // Submit the form
  fireEvent.click(screen.getByText('Add a new box!'));

  // Remove the box
  fireEvent.click(screen.getByText('X'));

  // Check if the box is not in the document
  expect(screen.queryByTestId('box')).not.toBeInTheDocument();
});
