// TodoItem.js
import PropTypes from "prop-types";
import Button from "./Button";

const TodoItem = ({
  item,
  onEdit,
  edited,
  onDelete,
  isEditing,
  onEditChange,
  onUpdate,
}) => {
  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={edited}
            onChange={(e) => onEditChange(e.target.value)}
          />
          <button className="btn btn-primary" onClick={onUpdate}>
            Done
          </button>
        </>
      ) : (
        <>
          <li>{item}</li>
          <button className="btn btn-primary" onClick={onEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  edited: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  onEditChange: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
