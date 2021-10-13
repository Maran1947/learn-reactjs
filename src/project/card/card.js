import React from "react";
import "./card.css";

function card(props) {
  return (
    <div className="col">
      <div class="card card_shadow">
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <a href={props.buttonLink} class="btn btn-primary">
            {props.buttonTitle}
          </a>
        </div>
      </div>
    </div>
  );
}

export default card;
