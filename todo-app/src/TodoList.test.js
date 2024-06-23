import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList without crashing', () => {
  render(<TodoList />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

test('can add a new todo', () => {
  const { getByLabelText, getByText, getByDisplayValue } = render(<TodoList />);

  // Fill out the form
  const input = getByLabelText('New Todo:');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  // Check if the new todo is in the document
  expect(getByText('Test Todo')).toBeInTheDocument();
});

test('can remove a todo', () => {
  const { getByLabelText, getByText, queryByText } = render(<TodoList />);

  // Add a todo
  const input = getByLabelText('New Todo:');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  // Remove the todo
  fireEvent.click(getByText('X'));

  // Check if the todo is not in the document
  expect(queryByText('Test Todo')).not.toBeInTheDocument();
});
