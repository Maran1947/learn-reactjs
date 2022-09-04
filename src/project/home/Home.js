import React from "react";
import { Link } from "react-router-dom";
import Card from "../card/card.js";
import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <div className="title">
        <h1 className="learn_reactjs_text" >Learn React.js</h1>
      </div>
      {/* <div className="container">
        <div className="row gx-3 pt-4 pb-4 text-decoration-none">
          <Card
            title="Counter"
            description="In that Module you can add and subtract from a state and see it."
            buttonTitle="Let's go there"
            buttonLink="/counter"
          />
          <Card
            title="Meme Generator"
            description="Mems section here.."
            buttonTitle="Let's go there"
            buttonLink="/meme_generator"
          />
          <Card
            title="Meme Generator"
            description="Mems section here.."
            buttonTitle="Let's go there"
            buttonLink="/meme_generator"
          />

          <Card
            title="Meme Generator"
            description="Mems section here.."
            buttonTitle="Let's go there"
            buttonLink="/meme_generator"
          />

          <Card
            title="Meme Generator"
            description="Mems section here.."
            buttonTitle="Let's go there"
            buttonLink="/meme_generator"
          />
        </div>
      </div> */}
      <div className="projects_box">
        {/* Add your project card below*/}

        <div className="project">
          <h2>Counter</h2>
          <Link to="/counter" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Meme Generator</h2>
          <Link to="/meme_generator" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Quote Generator</h2>
          <Link to="/quote_generator" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Search Functionality</h2>
          <Link to="/search" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Responsive slider</h2>
          <Link to="/slider" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Currency Converter</h2>
          <Link to="/currency_converter" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>React Quiz</h2>
          <Link to="/react_quiz" className="btn_lets_go_there" >Let's go there</Link>
        </div>
        <div className="project">
          <h2>Greeting</h2>
          <Link to="/greeting" className="btn_lets_go_there" >Let's go there</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
