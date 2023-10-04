import "./App.css";
import React, { useState } from "react";
import apiQuote from "./utils/api-quote";
import copyQuote from "./utils/copy-quote";
import ShareViaSocial from "./ShareViaSocial";

const App = () => {
  const [quote, setQuote] = useState({
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  });

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={() => copyQuote(quote)} className="btn">
            Copy
          </button>
          <button onClick={async () => setQuote(await apiQuote())}>
            Generate Another Quote
          </button>
        </div>
        <ShareViaSocial quote={quote} />
      </div>
    </>
  );
};

export default App;
