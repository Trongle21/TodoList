import Button from "./Button";

const ClearAll = ({ itemCount, onClearAll }) => {
  return (
    <div className="clear-all">
      <h3>You have {itemCount} job(s)</h3>
      <button className="btn btn-danger" onClick={onClearAll}>
        Clear All
      </button>
    </div>
  );
};


export default ClearAll;
