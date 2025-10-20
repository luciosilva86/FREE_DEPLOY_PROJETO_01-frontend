import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function TasksCRUD() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tarefas')
        .select('*')
        .order('id', { ascending: true });

      if (error) throw error;
      setTasks(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('tarefas')
        .insert([{ title, is_complete: false }])
        .select();

      if (error) throw error;
      setTasks([...tasks, data[0]]);
      setNewTaskTitle('');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleTask = async (id, currentStatus) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('tarefas')
        .update({ is_complete: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, is_complete: !currentStatus } : task
      ));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('tarefas')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Minhas Tarefas</h1>
      <div>
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={() => addTask(newTaskTitle)} disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar Tarefa'}
        </button>
      </div>
      {loading && <p>Carregando tarefas...</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.is_complete ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </span>
            <input
              type="checkbox"
              checked={task.is_complete}
              onChange={() => toggleTask(task.id, task.is_complete)}
            />
            <button onClick={() => deleteTask(task.id)} disabled={loading}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksCRUD;

