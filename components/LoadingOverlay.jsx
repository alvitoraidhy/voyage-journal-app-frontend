export default ({ isLoading }) => {
  return isLoading ? (
    <>
      <div className="fixed-top bg-white vh-100 vw-100 d-flex flex-column">
        <div className="spinner-border mx-auto my-auto" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
