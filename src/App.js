import './tailwind.css';
import { createElement } from 'react';

function Button(props){
  return <button>{props.text}</button>
}

function App() {
  // const h1=createElement('h1', null, 'eben be eben');
  // return createElement('main',{
    //   className:'anan',
    //   id:'eben'
    // },h1)
  const todos=['todo1', 'todo2', 'todo3'];
  const name="Anan be anan";
  let num=0;
  function anan(){
    num++
    console.log('lim'+ num);
  }
  return (
    <main>
      <h1 style={{color:'tomato', fontWeight:'700', fontSize:'45px'}}>Anan be anan</h1>
      <label htmlFor='search' onClick={anan}>Arama</label>
      <input type='text' id='search' tabIndex="1"/>
      <Button text='merhaba aq'/>
      <ul>
        {todos.map((todo, index)=>
            <li key={index}>
              {todo +" "+ name.toUpperCase()}
            </li>
        )}
      </ul>
    </main>
  );
}

export default App;
