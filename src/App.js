import bomb from './bomb.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={bomb} className="App-logo" alt="bomb" />
        <a
          className="App-link"
          href="https://www.redhat.com/en/topics/devops/what-is-ci-cd"
          target="_blank"
          rel="noopener noreferrer"
        >
          From local source code to fully tested and deployed application in a single push
        </a>
      </header>
    </div>
  );
}

export default App;
