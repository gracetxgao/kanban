import LoginButton from './Login';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import LogoutButton from './Logout';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]); // declare list of all tasks

  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []); // calls all previously stored tasks

  return (
    <div className='App bg-blue-100 min-h-screen pt-1'>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <DndProvider backend={HTML5Backend}>
        <Toaster/>
        <div className='w-screen h-full flex flex-col items-center p-3 gap-16 pt-10'>
          <CreateTask tasks={tasks} setTasks={setTasks}/>
          <ListTasks tasks={tasks} setTasks={setTasks}/>
          {/* <Footer /> */}
        </div>
      </DndProvider>  
    </div>

  );
};

export default App;
