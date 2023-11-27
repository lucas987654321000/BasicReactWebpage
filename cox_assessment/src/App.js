import logo from './logo.svg';
import './App.css';
import Card from "./Card";
import data from './UIE-InterviewProject.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </header>
    </div>
  );
}

export default App;
