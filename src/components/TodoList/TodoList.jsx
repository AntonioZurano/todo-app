import { TodoFilters } from "../TodoFilters"
import { Todo } from "../Todo"

const TodoList = ( { todos, handleSetComplete } ) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo key={todo.id} todo={todo} handleSetComplete={handleSetComplete} />
                )
            })}
            <TodoFilters/>
        </div>
    )
}

export { TodoList }