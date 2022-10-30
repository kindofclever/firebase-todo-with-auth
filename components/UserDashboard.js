import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../config/firebase";
import TodoCard from "./TodoCard";
import { doc, setDoc, deleteField } from "firebase/firestore";
import useFetchTodos from "../hooks/fetchTodos";
import { ImSpinner7 } from "react-icons/im";

const UserDashboard = () => {
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState(null);
  const [edittedValue, setEdittedValue] = useState("");
  const { userInfo, currentUser } = useAuth();

  const { todos, setTodos, loading, error } = useFetchTodos();

  const handleAddTodo = async () => {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todos).length === 0 ? 1 : Math.max(...Object.keys(todos)) + 1;
    setTodos({ ...todos, [newKey]: todo });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: todo
        }
      },
      { merge: true }
    );
    setTodo("");
  };

  const handleAddEdit = (todoKey) => {
    return () => {
      setEdit(todoKey);
      setEdittedValue(todos[todoKey]);
    };
  };

  const handleEditTodo = async () => {
    if (!edittedValue) {
      return;
    }
    const newKey = edit;
    setTodos({ ...todos, [newKey]: edittedValue });
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(
      userRef,
      {
        todos: {
          [newKey]: edittedValue
        }
      },
      { merge: true }
    );
    setEdit(null);
    setEdittedValue("");
  };

  const handleDelete = (todoKey) => {
    return async () => {
      const tempObj = { ...todos };
      delete tempObj[todoKey];

      setTodos(tempObj);
      const userRef = doc(db, "users", currentUser.uid);
      await setDoc(
        userRef,
        {
          todos: {
            [todoKey]: deleteField()
          }
        },
        { merge: true }
      );
    };
  };

  return (
    <div className="w-full max-w-[65ch] mx-auto flex flex-col gap-4 md:gap-6 mt-5">
      <h3 className="text-[#fcffff] text-center select-none">
        Hello{" "}
        <span className="text-[#ca1503] text-2xl">{currentUser.email}</span>!
        Here you find a list of your todos!
      </h3>
      <div className="flex items-stretch duration-300 border-b-2 md:border-b-4 border-solid border-[#fcffff] hover:border-[#ca1503]">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className="flex-1 outline-none p-2  bg-[#fcffff] placeholder-[#ca1503] placeholder-opacity-50"
          placeholder="Enter a new todo here..."
        />
        <button
          onClick={handleAddTodo}
          className="w-fit font-bold px-4 md:px-6 py-2 md:py-3 hover:text-[#fcffff] hover:bg-[#ca1503] duration-300 bg-[#fcffff] text-[#ca1503] ">
          Add
        </button>
      </div>
      {loading && (
        <div className="text-center flex flex-1 items-center justify-center">
          <ImSpinner7 className="animate-spin flex-1 mt-10" size={60} />
        </div>
      )}
      {userInfo && !loading ? (
        <>
          {Object.keys(todos).map((todo, index) => {
            return (
              <TodoCard
                handleEditTodo={handleEditTodo}
                key={index}
                handleAddEdit={handleAddEdit}
                edit={edit}
                todoKey={todo}
                edittedValue={edittedValue}
                setEdittedValue={setEdittedValue}
                handleDelete={handleDelete}>
                {todos[todo]}
              </TodoCard>
            );
          })}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserDashboard;
