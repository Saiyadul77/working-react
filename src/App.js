import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo/Todo';
import Mobile from './components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>
      <h1>JSON Placeholder todo</h1>

      <Todo></Todo>
    </div>
  );
}

export default App;
