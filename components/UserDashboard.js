import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { db } from "../config/firebase";
import TodoCard from "./TodoCard";
import { doc, setDoc } from "firebase/firestore";

const UserDashboard = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState({});
  const { userInfo, currentUser } = useAuth();
  console.log(todoList);

  // useEffect(() => {
  //   if (!userInfo || Object.keys(userInfo).length === 0) {
  //     setAddTodo(true);
  //   }
  // }, [userInfo]);

  console.log(currentUser);

  const handleAddTodo = async () => {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todoList).length === 0
        ? 1
        : Math.max(...Object.keys(todoList)) + 1;
    setTodoList({
      ...todoList,
      [newKey]: todo
    });
    setTodo("");
    const t = "todos";
    const userRef = doc(db, "users", currentUser.uid);
    await setDoc(userRef, { t: { [newKey]: todo } }, { merge: true });
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

      {userInfo ? (
        <>
          {Object.keys(todoList).map((todo, index) => {
            return <TodoCard key={index}>{todoList[todo]}</TodoCard>;
          })}
        </>
      ) : (
        <></>
      )}
      {/* {!addTodo ? (
        <button
          onClick={() => setAddTodo(true)}
          className="w-full p-2 bg-[#ca1503] text-[#fcffff] duration-300 relative
        after:absolute after:top-0 after:right-full after:bg-[#fcffff] after:z-10 after:w-full after:h-full overflow-hidden 
        hover:after:translate-x-full after:duration-300 hover:text-[#ca1503]">
          <p className="relative z-20 font-bold text-center">
            Start adding todos
          </p>
        </button>
      ) : (
        <></>
      )} */}
    </div>
  );
};

export default UserDashboard;
