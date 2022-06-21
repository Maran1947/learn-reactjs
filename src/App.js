
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './project/home/Home';
import Counter from './project/counter/counter';
import meme_generator from './project/meme_generator/MemeGenerator';
import quote_generator from './project/quote_generator/Quote_Generator';
import Search from './project/search/Search';
import Slider from './project/responsive_slider/Slider';
import CurrencyConverter from './project/currency_converter/CurrencyConverter';
import React_Quiz from './project/reactquiz/React_Quiz';
import Greeting from './project/greeting/Greeting';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/search" component={Search} />
          <Route path="/quote_generator" component={quote_generator} />
          <Route path="/meme_generator" component={meme_generator} />
          <Route path="/slider" component={Slider} />
          <Route path="/currency_converter" component={CurrencyConverter} />
          <Route path="/react_quiz" component={React_Quiz} />
          <Route path="/greeting" component={Greeting} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
