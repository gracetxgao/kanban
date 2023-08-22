import LoginButton from './Login';
import Profile from './Profile';
import { useEffect, useState } from 'react';
import CreateTask from './components/CreateTask';
import ListTasks from './components/ListTasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';
import Footer from './components/Footer';

function App() {
  const { isAuthenticated } = useAuth0;

  const [tasks, setTasks] = useState([]); // declare list of all tasks

  console.log("tasks", tasks);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []); // calls all previously stored tasks

  return (
    <div className='App'>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <DndProvider backend={HTML5Backend}>
        <Toaster/>
        <div className='bg-slate-100 w-screen h-screen flex flex-col items-center p-3 gap-16 pt-32'>
          <CreateTask tasks={tasks} setTasks={setTasks}/>
          <ListTasks tasks={tasks} setTasks={setTasks}/>
          <Footer />
        </div>
      </DndProvider>  
    </div>

  );
};

export default App;
