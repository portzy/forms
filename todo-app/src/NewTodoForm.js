import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo({ id: uuid(), task });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo:</label>
      <input
        id="task"
        name="task"
        value={task}
        onChange={(evt) => setTask(evt.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
