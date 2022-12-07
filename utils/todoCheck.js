

export default function todoCheck(todos, setTodos, itemId) {
    let newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === itemId) {
                todo.isComplete = !todo.isComplete
            }
        });
        setTodos(newTodos);
}