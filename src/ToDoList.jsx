import React ,{useState} from 'react';

export default function ToDoList(){
    const [task, setTask] = useState([]);
    const [newTask,setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    const handleAddTask = () => {
        if(newTask.trim() === ""){
            alert("Please enter a task");
            return;
        }
        setTask([...task, newTask]);
        setNewTask('');
    }
    const handleDeleteTask = (index) =>{
    setTask(task.filter((_, i) => i !== index));
    document.querySelector("li:nth-child("+(index)+")").style.display = "none";
    }
    const moveUp = (index) => {
        if (index >0){
            const newTaskList = [...task];
            [newTaskList[index-1],newTaskList[index]] = [newTaskList[index],newTaskList[index-1]];
            setTask(newTaskList);
        }
    }
    const moveDown = (index) => {
        if (index < task.length-1){
            const newTaskList = [...task];
            [newTaskList[index+1],newTaskList[index]] = [newTaskList[index],newTaskList[index+1]];
            setTask(newTaskList);
        }
    }
    
    return(
        <>
        <div className='to-do-list'> 
        <h1>TO DO LIST APP</h1>
            <div className="text-input">
                <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter your task" />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <div className='task-list'>
                <ol>
                    {task.map((element,index) => {
                        return(
                            <li key={index} className='task-item'>
                                <input type="checkbox" />
                                <span>{element}</span>
                                <div className='btns'> 
                                    <button id="del" onClick={() => handleDeleteTask(index)}>Delete</button>
                                    <button id="up" onClick={() => moveUp(index)}>&#128070;</button>
                                    <button id="down" onClick={() => moveDown(index)}>&#128071;</button>
                                </div>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
            
        </>
    )
}