import { useState } from 'react';
import './TaskManager.css';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
      createdAt: new Date()
    };
    
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Simple Task Manager</h1>
      </header>

      <div className="form-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="input"
        />
        <button onClick={addTask} className="add-button">Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li 
            key={task.id} 
            className={`task-item ${task.completed ? 'task-completed' : ''}`}
          >
            <span className="task-text">{task.text}</span>
            <div className="task-buttons">
              <button 
                onClick={() => toggleComplete(task.id)} 
                className="action-button complete-button"
              >
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="action-button delete-button"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <div className="stats">
          <span>Total tasks: {tasks.length}</span>
          <span>Completed: {completedCount}</span>
          <span>Remaining: {tasks.length - completedCount}</span>
        </div>
      )}
    </div>
  );
}