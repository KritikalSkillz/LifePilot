import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{fontFamily: "sans-serif", padding: "40px"}}>
      <h1>Life Pilot</h1>
      <p>Your life, gamified.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
