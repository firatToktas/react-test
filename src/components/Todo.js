import { useState } from "react";
import Header from "./Memoization";
function TodoApp(){

    console.log('app render');
    const [todo, setTodo]=useState('');
    const [todos, setTodos]=useState([]);

    const addTodo=(e)=>{
        e.preventDefault();
        setTodo(e.target.value);
    }
    const printTodo=()=>{
        setTodos([...todos, todo]);
        setTodo('');
        console.log('gönderdi');
    }
    return (
        <>  
        <Header></Header>
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