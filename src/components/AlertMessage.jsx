function AlertMessage({ message }) {
  return (
    <div
      style={{
        background: "#ff4b5c",
        color: "white",
        padding: "10px",
        borderRadius: "6px",
        marginBottom: "15px"
      }}
    >
      {message}
    </div>
  );
}

export default AlertMessage;