import { useState } from "react";
import Header from "./Memoization";
function TodoApp(){

    const [todo, setTodo]=useState('');
    const [todos, setTodos]=useState([]);
    
    const [search, setSearch]=useState('');
    
    const addTodo=(e)=>{
        e.preventDefault();
        setTodo(e.target.value);
    }
    const printTodo=()=>{
        setTodos([...todos, todo]);
        setTodo('');
    }
    const searchHandle= e =>{
        setSearch(e.target.value);
    }

    const filtredTodos = todos.filter((filtTodo) =>
    filtTodo.toLowerCase().includes(search.toLowerCase()));

    console.log(filtredTodos);
    
    return (
        <>  
        <Header></Header>
        <p style={{display:"inline", margin:"8px"}}>Arama yap</p>
        <input type="text" value={search} onChange={searchHandle}/>
        {search}
        <hr></hr>
        <form onSubmit={addTodo}>
            <input type="text" value={todo} onChange={addTodo}/>
            <button type="submit" onClick={printTodo} disabled={!todo}>Ekle</button>
        </form>
        <ul>
            {todos.map((todo, index) => {
                if (!search || filtredTodos.includes(todo)){
                return <li key={index}>{todo}</li>;
                }
                return null;
            })}
        </ul>
        </>
    )
}


export default TodoApp