import React from "react";

function Box({ id, width, height, backgroundColor, handleRemove }) {
  return (
    <div data-testid={`box-${id}`} style={{ width: `${width}px`, height: `${height}px`, backgroundColor }}>
      <button onClick={() => handleRemove(id)}>X</button>
    </div>
  );
}

export default Box;
