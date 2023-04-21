import { useContext } from 'react';
import './App.scss'
import { AddTask, Tasks, EditTask } from './components'
import { TaskContext } from './components/context/TaskContext';



function App() {
  const { todos, setTodos } = useContext(TaskContext);
  return (
    <div className='app-container'>
      <div className='app-header'>
        <h1 className='header-text'>Task Management {'>'} Home</h1>
      </div>
      <section className='contents'>
        {/* <AddTask /> */}
        <Tasks />
        {/* <EditTask /> */}
      </section>
    </div>
  )
}

export default App
