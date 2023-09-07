import "./App.css";
import React, { useState } from "react";
import {
  WhatsappShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);
  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data._id);

        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div>
          <TwitterShareButton
            url={`${quote.content} - ${quote.author}`}
            hashtags={["Quote", "Motivation"]}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          {/* WhatsApp Share Button */}
          <WhatsappShareButton url={`${quote.content} - ${quote.author}`}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <EmailShareButton url={`${quote.content} - ${quote.author}`}>
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
