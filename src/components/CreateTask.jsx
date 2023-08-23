import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast"

const CreateTask = ({tasks, setTasks}) => {
    const [task, setTask] = useState({ // sets default empty task
        id: "",
        name: "",
        status: "todo", // or in progess or finished
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // stops default action (reload) on render

        if (task.name.length < 3) return toast.error("Task must be more than three characters");
        if (task.name.length > 100) return toast.error("Task must be less than 100 characters");

        setTasks((prev) => {
            // args: list of previously added tasks
            // adds new task to list of all tasks
            // returns: list of all tasks updated

            const list = [...prev, task];

            localStorage.setItem("tasks", JSON.stringify(list)); // adds key and item to local storage

            return list;
        });

        toast.success("Task Created")

        setTask({
            // template for new task
            id: "",
            name: "",
            status: "todo", // or in progess or finished
        });
    };

    return <form onSubmit={handleSubmit}>
        <input 
            type='text' 
            className="border-2 border-blue-300 bg-slate-100 rounded-md mr-4 h-12 w-96 px-1"
            value={task.name}
            onChange={(e)=> setTask({...task, id: uuidv4(), name: e.target.value})} // creates new task
        />
        <button className="bg-blue-300 rounded-md px-4 h-12 text-white">Create</button>
    </form>;
}

export default CreateTask;