// TodoList.js
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import Button from "./Button";
import FilterOption from "./FilterOption";

const TodoList = ({
  items,
  edit,
  edited,
  onSetEdited,
  onHandleUpdate,
  onHandleEdit,
  onHandleDelete,
}) => {
  return (
    <ul className="todo-list">
      {items.map((item, index) => (
        <div className="todo-item" key={index}>
          {edit === index ? (
            <>
              <FilterOption type="text" value={edited} onChange={onSetEdited} />
              <Button
                variant="primary"
                textBox="Done"
                onClick={() => onHandleUpdate(index)}
              />
            </>
          ) : (
            <>
              <li>{item}</li>
              <Button
                variant="primary"
                textBox="Edit"
                onClick={() => onHandleEdit(index)}
              />
              <Button
                variant="danger"
                textBox="Delete"
                onClick={() => onHandleDelete(index)}
              />
            </>
          )}
        </div>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired,
  edit: PropTypes.number,
  edited: PropTypes.string.isRequired,
  onSetEdited: PropTypes.func.isRequired,
  onHandleUpdate: PropTypes.func.isRequired,
  onHandleEdit: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
};

export default TodoList;
