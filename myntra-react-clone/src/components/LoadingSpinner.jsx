const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem", margin: "10% 0" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default LoadingSpinner;
