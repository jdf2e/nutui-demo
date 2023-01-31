import logo from './logo.svg';
import './App.css';
import { Button, Toast } from '@test/nutui-react';
import '@test/nutui-react/dist/style.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={() => {
          Toast.text('网络失败，请稍后再试~')

        }}>主要按钮</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
