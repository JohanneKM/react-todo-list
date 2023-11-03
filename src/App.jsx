import { useState } from "react";

import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tab, setTab] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleNewTask = (event) => {
    setNewTask(event.target.value);
  };

  const handleCheckboxStatus = () => {
    {
      isChecked ? setIsChecked(false) : setIsChecked(true);
    }
  };
  console.log(newTask);
  console.log(tab);

  return (
    <>
      <div className="container">
        {tab.map((elem, index) => {
          return (
            <>
              <div className="task-list">
                <input onClick={handleCheckboxStatus} type="checkbox" />
                <p className={isChecked ? "to-cross" : "normal"} key={index}>
                  {elem}
                </p>
              </div>
            </>
          );
        })}

        <input
          onChange={handleNewTask}
          type="text"
          placeholder="new task"
          name="new-task"
          value={newTask}
        />

        <button
          onClick={() => {
            const newTab = [...tab];
            newTab.push(newTask);
            setTab(newTab);
          }}
        >
          Add task
        </button>
      </div>
    </>
  );
}

export default App;
