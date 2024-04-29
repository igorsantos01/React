const StatusText = () => {
  const status = true;
  return (
    <>
      <div>
        <h2 style={{ color: status ? "#00ff9f" : "#f64348" }}>
          Current Status: {status ? "ON" : "OFF"}
        </h2>
      </div>
    </>
  );
};

export default StatusText;
