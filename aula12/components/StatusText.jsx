const StatusText = () => {
  const status = true;
  return (
    <>
      <div>
        <h2>Current Status: {status ? "ON" : "OFF"}</h2>
      </div>
    </>
  );
};

export default StatusText;
