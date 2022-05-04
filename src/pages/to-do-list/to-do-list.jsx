import React, { useState } from "react";
import "./to-do-list.scss";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";
import { GrEdit } from "react-icons/gr";
import Btn from "../../components/btn/btn";

const capitalLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default function ToDoList() {
  const [task, setTask] = useState("");
  const taskStorageData = JSON.parse(localStorage.getItem("taskList"));
  const [taskList, setTaskList] = useState(taskStorageData || []);
  const [indexToEdit, setIndexToEdit] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (!task) {
      return;
    }
    taskList.push(capitalLetter(task));
    setTaskList([...taskList]);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    setTask("");
  };
  const deleteTask = (indexToRemove) => {
    taskList.splice(indexToRemove, 1);
    setTaskList([...taskList]);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
  };

  const editTask = (index) => {
    setIndexToEdit(index);
    setTaskToEdit(taskList[index]);
  };

  const saveTaskToEdit = (e, index) => {
    e.preventDefault();
    if (!taskToEdit) {
      return;
    }
    taskList[index] = taskToEdit;
    setTaskList([...taskList]);
    window.localStorage.setItem("taskList", JSON.stringify(taskList));
    setIndexToEdit(null);
    setTaskToEdit(null);
  };

  const discardEdit = () => {
    setIndexToEdit(null);
    setTaskToEdit(null);
  };
  const clearAllTask = () => {
    setTaskList([]);
  };

  let number = taskList.length > 1 ? "tasks" : "task";
  let totalText = `You have ${taskList.length} ${number} to do `;

  return (
    <div className="to-do-list-container">
      <div className="to-do-list-title">Create your to-do list:</div>
      <div className="to-do-list-wrapper">
        <form onSubmit={addTask} className="form-container">
          <input
            placeholder="Note here..."
            className="add-task"
            value={task}
            onInput={(e) => setTask(e.target.value)}
          />
          <button className="task-submit-btn" type="submit">
            Add task
          </button>
        </form>
        <div>
          <ul className="aded-task">
            {taskList.map((item, index) => (
              <li key={index} className="created-task">
                {indexToEdit === index ? (
                  <div className="added-task-form-wrapper">
                    <form
                      onSubmit={(e) => saveTaskToEdit(e, index)}
                      className="edit-task-form"
                    >
                      <input
                        value={taskToEdit}
                        onChange={(e) => setTaskToEdit(e.target.value)}
                        autoFocus
                        className="task-editor"
                      />
                      <div className="task-editor-button-wrapper">
                        <button
                          type="submit"
                          className="edit-task-check-button"
                        >
                          <AiOutlineCheck />
                        </button>
                        <AiOutlineClose
                          onClick={discardEdit}
                          className="edit-task-close-icon"
                        />
                      </div>
                    </form>
                  </div>
                ) : (
                  <>
                    {item}
                    <div>
                      <GrEdit
                        className="edit-button"
                        onClick={() => editTask(index)}
                      />
                      <FiTrash
                        className="close-icon"
                        onClick={() => deleteTask(index)}
                      />
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="total-information">
          <div className="show-total-tasks-to-do">
            {taskList.length > 0 ? totalText : ""}
            {taskList.length > 0 ? (
              <div className="delete-all-task-btn">
                <Btn
                  onClick={clearAllTask}
                  btnText={"Delete all tasks"}
                  style="secondary"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
