import { useState } from "react";
import './TaskManager.css';

function TaskManager(){
    const [data,setData]=useState("");  
    const [taskList,setTaskList]=useState([]);
    const [completedList,setCompletedList]=useState([]);

    let addTask = () => {
        setTaskList([...taskList, data]);
        setData("");
    };

    let removeTask = (index) => {
        let updatedList = [...taskList];
        updatedList.splice(index, 1);
        setTaskList(updatedList);
    };

    let markAsDone = (index) => {
        let updatedTaskList = [...taskList];
        let completedTask = updatedTaskList[index];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
        setCompletedList([...completedList, completedTask]);
    };

    return(
        <div className="container">
            <h1>Task Manager</h1>
            <div className="input-container">
                <input type="text" value={data} onChange={(event) => setData(event.target.value)} placeholder="Enter task..." />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="task-list">
                <h2>Tasks To Be Done</h2>
                {taskList.map((task, index) => (
                    <div className="task-item" key={index}>
                        <span>{task}</span>
                        <button onClick={() => removeTask(index)}>Remove</button>
                        <button onClick={() => markAsDone(index)}>Done</button>
                    </div>
                ))}
            </div>
            <div className="completed-list">
                <h2>Completed Tasks</h2>
                {completedList.map((task, index) => (
                    <div className="completed-item" key={index}>
                        <p>{task}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskManager;
