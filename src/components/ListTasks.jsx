import { useEffect, useState } from "react"
import { useDrag, useDrop } from "react-dnd";
import toast from "react-hot-toast"

const ListTasks = ({tasks, setTasks}) => {

    // declare all categories
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);

    useEffect (() => {
        // categorize tasks
        const fTodos = tasks.filter((task) => task.status === "todo");
        const fInProgress = tasks.filter((task) => task.status === "inprogress");
        const fClosed = tasks.filter((task) => task.status === "closed");

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fClosed);

    }, [tasks]);

    const statuses = ["todo", "inprogress", "closed"];

    return (
        <div className="flex gap-16">
            {/* duplicates the array statuses and maps inputed and new values in */}
            {statuses.map((status, index) => (
                <Section 
                    key={index} 
                    status={status} 
                    tasks={tasks} 
                    setTasks={setTasks} 
                    todos={todos} 
                    inProgress={inProgress} 
                    closed={closed}
                />
            ))}
        </div>
    );
};

export default ListTasks;

const Section = ({status, tasks, setTasks, todos, inProgress, closed}) => {
    const [{isOver}, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));
    
    // set up header variable styles
    let text = "Todo";
    let bg = "bg-slate-500";
    let tasksToMap = todos;

    if (status === "inprogress") {
        text = "In Progress";
        bg = "bg-purple-500";
        tasksToMap = inProgress;
    }

    if (status === "closed") {
        text = "Closed";
        bg = "bg-green-500";
        tasksToMap = closed;
    }

    const addItemToSection = (id) => {
        // args: id of task to be added
        // returns: list of all tasks in section
        setTasks((prev) => {
            // add new task to list of all tasks in section
            const mTasks = prev.map(t => {
                if(t.id === id){ // only for specific id of task to be moved
                    return {...t, status: status};
                }
                return t;
            });
            // adds new list of section tasks to local storage in json format
            localStorage.setItem("tasks", JSON.stringify(mTasks));
            toast("Task status changed");
            return mTasks;
        });
    };

    return (
        // create the section with information about tasks in section
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200" : ""}`}>
            <Header text={text} bg={bg} count={tasksToMap.length} /> 
            {tasksToMap.length > 0 && tasksToMap.map(task => 
                <Task 
                    key={task.id} 
                    task={task} 
                    tasks={tasks} 
                    setTasks={setTasks}
                />
            )}
        </div>
    );
};

const Header = ({text, bg, count}) => {
    // formatting the header... not sure why the variables can't be set up right before this part
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>
           {text}
            <div className="ml-2 bg-white w-5 h-5 flex items-center text-black rounded-full justify-center">
                {count}
            </div>
        </div>
    );
};

const Task = ({task, tasks, setTasks}) => {
    // sets up dragging again?
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    const handleRemove = (id) => {
        // filter out task to be removed from list of all tasks (in section?)
        const ftasks = tasks.filter(t => t.id !== id);

        localStorage.setItem("tasks", JSON.stringify(ftasks));
        setTasks(ftasks);

        toast("Task removed");
    }
    
    return (
        <div 
            ref = {drag} 
            className={`relative pt-4 mt-8 shadow-md rounded-md cursor-grab ${isDragging ? "opacity-25" : "opacity-100"}`}
        >
            <p className="pl-4 pb-4">{task.name}</p>
            <button 
                className="absolute bottom-4 right-1 text-slate-400" 
                onClick={() => handleRemove(task.id)}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                </svg>
            </button>
        </div>
    );
};