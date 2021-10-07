import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './project/counter/Counter';
import Home from './project/home/Home';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Add your project route here */}
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
