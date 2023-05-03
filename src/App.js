import { useState } from "react";
import { Title } from "./components/Title";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
//import { Todo } from "./components/Todo";

function App() {

  const [todos, setTodos] = useState ([
    {
      id:1,
      title: 'Ver la próxima película de Marvel',
      completed: false,
    },
    {
      id:2,
      title: 'Grabar el siguiente video',
      completed: false,
    },
    {
      id:3,
      title: 'Lavar la ropa',
      completed: false,
    },
    {
      id:4,
      title: 'Estudiar 2 Horas mínimo',
      completed: false,
    },          
  ])

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;
    
    const newTodo = {
      id: lastId + 1,
      title, 
      completed: false,
    }

    const todoList = [ ...todos]
    todoList.push(newTodo);
    setTodos(todoList); 
  }

  return (
    <div className="bg-gray-900 min-h-screen font-inter h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput addTodo={addTodo}/>
        <TodoList todos={todos}/>
      </div>
    </div>
  );
}

export default App;
