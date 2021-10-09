import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './project/counter/counter';
import quote_generator from './project/quote_generator/Quote_Generator';
import Home from './project/home/Home';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quote_generator" component={quote_generator} />
          {/* Add your project route here */}
          <Route path="/counter" component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
