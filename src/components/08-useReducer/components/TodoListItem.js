import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {*} todo todo element
 * @param {*} index in array
 * @param {*} handleToggle
 * @param {*} handleDelete
 * @returns
 */
export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
	return (
		<li
			// key={ todo.id } // se coloca donde fue llamado
			className="list-group-item"
		>
			<p
				className={`${todo.done && "complete"}`}
				onClick={() => handleToggle(todo.id)}
			>
				{index + 1}. {todo.desc}
			</p>

			<button
				className="btn btn-danger"
				onClick={() => handleDelete(todo.id)}
			>
				Delete
			</button>
		</li>
	);
};

TodoListItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	handleToggle: PropTypes.func.isRequired,
	handleDelete: PropTypes.func.isRequired,
};
