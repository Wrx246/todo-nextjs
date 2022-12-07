
export default function todoEdit(todos, setTodos, editValue, itemId) {
    const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (itemId === todo.id) {
                todo.name = editValue
            }
        });
        setTodos(newTodos);
}