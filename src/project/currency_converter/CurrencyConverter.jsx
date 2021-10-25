import React, { useEffect, useState } from "react";
import Axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import "./CurrencyConverter.css";

export default function CurrencyConverter(props) {
  // Initializing all the state variables
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);

  // Calling the api whenever the dependency changes
  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  // Calling the convert function whenever
  // a user switches the currency
  useEffect(() => {
    
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  // Function to convert the currency
  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  // Function to switch between two currency
  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <React.Fragment>
      <div className="pageContainer">
        <div className="pageTitle">
          <h1>Currency converter</h1>
        </div>
        <section className="pageForm">
          <div className="pageInput">
            <h3>Amount</h3>
            <input
              type="number"
              pattern="[0-9]"
              placeholder="Enter the amount"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </div>
          <div className="pageConvert">
            <div className="left">
              <h3>From</h3>
              <Dropdown
                options={options}
                onChange={(e) => {
                  setFrom(e.value);
                }}
                value={from}
                placeholder="From"
              />
            </div>
            <div className="switch">
              <HiSwitchHorizontal
                size="30px"
                onClick={() => {
                  flip();
                }}
              />
            </div>
            <div className="right">
              <h3>To</h3>
              <Dropdown
                options={options}
                onChange={(e) => {
                  setTo(e.value);
                }}
                value={to}
                placeholder="To"
              />
            </div>
          </div>
        </section>
        <button
          className="pageButton"
          onClick={() => {
            convert();
            console.log("sdsd", input);
          }}
        >
          Convert
        </button>
        <div className="pageResult">
          <h3>Converted Amount:</h3>
          <p>{input!=='' ? `${input}  ${from} =  ${
            output === 0 ? 0 : output.toFixed(2)
          } ${to}` : null}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
