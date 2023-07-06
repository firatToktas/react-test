import logo from './logo.svg';
import styles from './App.module.css'
import Test from './Test.js'
import {Title}  from './Components.js';
import Tailwind from './tailwind';
import './tailwind.css';

function App() {
  return (
    <div className={styles.App}>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>

      <Title>{process.env.NODE_ENV}</Title>
      <img src='/logo192.png' alt=''/>
      <h1>Test</h1>
      <Test/>
      <Tailwind/>
    </div>
  );
}

export default App;
