import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="list-group-item d-flex justify-content-center gap-3 mb-3">
      <span className= {checked ? "h5" : "text-decoration-line-through"}>{data}</span>
      <button className="btn btn-success" onClick={() => onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="btn btn-warning" onClick={() => onHandleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};