import Personajes from './components/personajes';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Rick and Morty API
        </h1>
      <Personajes />
      </header>
        
    </div>
  );
}

export default App;
