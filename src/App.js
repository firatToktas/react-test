import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <img src='/logo192.png' alt=''/>
      <h1 style={{color:"red", backgroundColor:"tomato", display:"inline-block", height:"200px"}}>Test</h1>
    </div>
  );
}

export default App;
