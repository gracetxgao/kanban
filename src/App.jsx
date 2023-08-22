import LoginButton from './Login';
import Kanban from './Kanban';
import Profile from './Profile';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <LoginButton /> } />
        <Route path='/kanban' element={ <Kanban />} />
        <Route path='/profile' element={ <Profile />} />
      </Routes>      
    </div>

  );
};

export default App;
