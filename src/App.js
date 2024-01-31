import logo from './logo.svg';
import './App.css';
import { Form as Aaa } from 'react-router-dom';
import Form from './Form';
import Stam from './Stam';
import List from './List';

function App() {
  return (
    <div className="App">
      <Form />
      <Stam />
      <List/>
    </div>
  );
}

export default App;
