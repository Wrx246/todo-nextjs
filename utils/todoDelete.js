

export default function todoDelete(todos, setTodos, itemId) {
    const newTodos = todos.filter(todo => todo.id !== itemId);
    setTodos(newTodos);
}

