import React from "react";

const TodoCard = ({
  children,
  edit,
  handleAddEdit,
  edittedValue,
  setEdittedValue,
  todoKey,
  handleEditTodo,
  handleDelete
}) => {
  return (
    <div className="text-[#fcffff] relative flex items-strech p-3 border-[#fcffff] border-2 md:border-4 border-solid">
      <div className="flex-1 flex">
        {edit === todoKey ? (
          <input
            autofocus
            className="bg-inherit flex-1 text-white outline-none"
            value={edittedValue}
            onChange={(e) => setEdittedValue(e.target.value)}
          />
        ) : (
          <div className="select-none">{children}</div>
        )}
      </div>
      <div className="flex items-center">
        {edit === todoKey ? (
          <i
            onClick={handleEditTodo}
            className="text-[#fcffff] fa-solid fa-check px-2 duration-300 hover:text-[#ca1503] hover:scale-125 cursor-pointer"></i>
        ) : (
          <i
            onClick={handleAddEdit(todoKey)}
            className="text-[#fcffff] fa-solid fa-pencil px-2 duration-300  hover:text-[#ca1503] hover:rotate-45 cursor-pointer"></i>
        )}

        <i
          onClick={handleDelete(todoKey)}
          className="text-[#fcffff] fa-regular fa-trash-can px-2 duration-300 hover:text-[#ca1503] hover:scale-125 cursor-pointer"></i>
      </div>
    </div>
  );
};

export default TodoCard;
