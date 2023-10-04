import './App.css';
import React, { useState } from 'react';
import SocialBtn from './compnents/SocialBtn';
import {
  FaFacebook,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const CURRENT_URL = encodeURI(window.location.href);
const App = () => {
  const url = 'https://api.quotable.io/random';
  let quoteData = {
    content: 'Let time be your only competitor.',
    author: 'Ahmed Saber',
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + ' once said: ' + quote.content
    );
    alert('copied');
  };

  const formattedQuote = encodeURIComponent(
    `${quote.author}: ${quote.content}`
  );

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn social-media">
            Copy
          </button>

          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div className="socials">
          <SocialBtn
            url={`https://twitter.com/intent/tweet?url=${CURRENT_URL}&text=${formattedQuote}`}
            icon={<FaTwitter />}
          />
          <SocialBtn
            url={`https://www.facebook.com/sharer/sharer.php?u=${CURRENT_URL}&quote=${formattedQuote}`}
            icon={<FaFacebook />}
          />
          <SocialBtn
            url={`https://www.linkedin.com/shareArticle?url=${CURRENT_URL}&title=${formattedQuote}`}
            icon={<FaLinkedin />}
          />
          <SocialBtn
            url={`whatsapp://send?text=${formattedQuote}`}
            icon={<FaWhatsapp />}
          />
          <SocialBtn
            url={`https://www.pinterest.com/pin/create/button/?url=${CURRENT_URL}&description=${formattedQuote}`}
            icon={<FaPinterest />}
          />
          <SocialBtn
            url={`https://www.reddit.com/submit?url=${CURRENT_URL}&title=${formattedQuote}`}
            icon={<FaReddit />}
          />
        </div>
      </div>
    </>
  );
};

export default App;
