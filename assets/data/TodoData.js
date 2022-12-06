import React, {createContext, useEffect, useState} from "react";


export const TodoContext = createContext();

export const DataProvider = (props) => {
    const [ todos, setTodos ] = useState([]);

    useEffect( () => {
        const todoStorage = JSON.parse(localStorage.getItem('TodoStorage'));
        if (todoStorage) setTodos(todoStorage)
    }, []);

    useEffect( () => {
        localStorage.setItem('TodoStorage', JSON.stringify(todos))
    }, [todos])


    return (
        <TodoContext.Provider value = {[ todos, setTodos ]}>
            {props.children}
        </TodoContext.Provider>
    )
}