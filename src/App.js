import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './project/counter/Counter';
import quote_generator from './project/quote_generator/Quote_Generator';
import Home from './project/home/Home';
import Search from './project/search/Search'

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          {/* Add your project route below */}
          <Route path="/counter" component={Counter} />
          <Route path="/search" component={Search} />
          <Route path="/quote_generator" component={quote_generator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
