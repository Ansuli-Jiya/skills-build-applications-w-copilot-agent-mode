import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container py-5">
      <div className="text-center">
        <h1>OctoFit Tracker</h1>
        <p className="lead">Modern React + Vite frontend for the OctoFit Tracker app.</p>
        <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
          Count: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
