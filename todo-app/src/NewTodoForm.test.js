import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm without crashing', () => {
  render(<NewTodoForm />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('calls addTodo on form submit', () => {
  const addTodo = jest.fn();
  const { getByLabelText, getByText } = render(<NewTodoForm addTodo={addTodo} />);

  // Fill out the form
  const input = getByLabelText('New Todo:');
  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  // Check if addTodo was called with the new todo
  expect(addTodo).toHaveBeenCalledWith(expect.objectContaining({ task: 'Test Todo' }));
});
