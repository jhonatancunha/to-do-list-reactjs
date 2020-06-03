import React from 'react';

function App() {
  return (
    <div>
      <input />

      <ul>
        <li style={{ textDecoration: 'line-through' }} className="completed">
          Item 1
        </li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
      </ul>

      <div>
        <h3>Mostrar</h3>
        <span>Todos </span> | <a href="#"> Finalizados </a> |
        <a href="#"> A fazer </a>
      </div>
    </div>
  );
}

export default App;
