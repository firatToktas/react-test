import { useState } from "react";

function TodoApp(){
    const [todo, setTodo]=useState('');
    const [todos, setTodos]=useState([]);

    const addTodo=(e)=>{
        e.preventDefault();
        setTodo(e.target.value);
    }
    const printTodo=()=>{
        setTodos([...todos, todo]);
        setTodo('');
    }
    return (
        <>  
        <form onSubmit={addTodo}>
            <input type="text" value={todo} onChange={addTodo}/>
            <button type="submit" onClick={printTodo} disabled={!todo}>Ekle</button>
        </form>
            <ul>
            {todos.map((todo, index)=>(
                <li key={index}>{todo}</li>
                ))}
            </ul>
        </>
    )
}


export default TodoApp