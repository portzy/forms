import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo without crashing', () => {
  render(<Todo />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
  });

test('calls removeTodo on button click', () => {
  const removeTodo = jest.fn();
  const { getByText } = render(<Todo id="1" task="Test Todo" removeTodo={removeTodo} />);

  // Click the remove button
  fireEvent.click(getByText('X'));

  // Check if removeTodo was called with the correct id
  expect(removeTodo).toHaveBeenCalledWith('1');
});
