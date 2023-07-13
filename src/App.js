// import './tailwind.css';
import { createElement, useState } from 'react';
import Button from "./components/Button";
import Tab from "./components/Tab"
import Refden from "./components/Refdene"
import Test from "./Test.js"

function App() {
  // const h1=createElement('h1', null, 'eben be eben');
  // return createElement('main',{
    //   className:'anan',
    //   id:'eben'
    // },h1)
  // const todos=['todo1', 'todo2', 'todo3'];
  // const name="Anan be anan";
  // let num=0;
  // function anan(){
  //   num++
  //   console.log('lim'+ num);
  // }
  const [show, setShow]=useState(false);
  return (
    <main>
      {/* <h1 style={{color:'tomato', fontWeight:'700', fontSize:'45px'}}>Anan be anan</h1>
      <label htmlFor='search' onClick={anan}>Arama</label>
      <input type='text' id='search' tabIndex="1"/> */}
      
      {/*  ELMAN GİZLE GÖSTER */}
      {/* <button onClick={()=> setShow(show=> !show)}>
        {show ? 'Gizle' :'Göster'}
      </button>
      {show && <Test/>}
       */}
      
      <Refden/>
      
      
      {/* TAB MENÜSÜ */}
      {/* <div style={{padding:"20px"}}>
        <Tab activeTab={1}>
          <Tab.Panel  title="Profil">1. tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2. tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
        </Tab>
    </div> */}

      {/*<Button variant="default" >beanan</Button>
      <Button variant="success">beanan</Button>
      <Button variant="warning">beanan</Button>
      <Button variant="danger">beanan</Button> */}
      
      {/* <ul>
        {todos.map((todo, index)=>
            <li key={index}>
              {todo +" "+ name.toUpperCase()}
            </li>
        )} */}
      {/* </ul> */}
    </main>
  );
}

export default App;
