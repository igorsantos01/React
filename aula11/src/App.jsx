function App() {
  const status = false;
  return (
    <>
      <div>
        <h1>React is awesome!</h1>
        <h2>It&apos;s easy, like 1 + 1 is {1 + 1}</h2>
        <h2>Current Status: {status ? "ON" : "OFF"}</h2>
      </div>
    </>
  );
}

export default App;
