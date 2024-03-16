import "./App.css";
import React, { useState } from "react";

const App = () => {
     const url = "https://api.quotable.io/random";
     let quoteData = {
          content: "Let time be your only competitor.",
          author: "Ahmed Saber",
     };
     const [quote, setQuote] = useState(quoteData);
     const [isOpen, setIsOpen] = useState(false);

     const generateQuote = () => {
          fetch(url)
               .then((response) => response.json())
               .then((data) => {
                    console.log(data);
                    setQuote(data);
               });
     };

     const copy = () => {
          navigator.clipboard.writeText(
               quote.author + " once said: " + quote.content
          );
          alert("copied");
     };

     const share = () => {
          setIsOpen((prev) => !prev);
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
                         <button onClick={share} className="btn">
                              Share
                         </button>
                         <button onClick={generateQuote}>
                              Generate Another Quote
                         </button>
                    </div>
                    <div className={`share-sec ${isOpen ? "" : "hidden"} `}>
                         <p>WhatsApp</p>
                         <p>Instagram</p>
                         <p>Facebook</p>
                    </div>
               </div>
          </>
     );
};

export default App;
