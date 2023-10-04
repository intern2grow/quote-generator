import './App.css';
import React, {useState} from 'react';

import { RedditShareButton , RedditIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import {WhatsappShareButton , WhatsappIcon} from 'react-share';

const App = () => {

const url = "https://api.quotable.io/random";

let quoteData = {
  content: "Do not let lust control you, because if it controls you, you will regret it for the rest of your life.",
  author: "Ayman Gouda",
}

const [quote, setQuote] = useState(quoteData);

const generateQuote = () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {setQuote(data)});}

const copy = () => {
  navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
  alert('successfully copied');}

const textQuote = `${quote.content} , ${quote.author}`;

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>

        <div className='text-end'>
          <RedditShareButton
          url={'https://www.reddit.com/'}
          title={`${textQuote}`}
          >
          <RedditIcon size={40} round={true} />
          </RedditShareButton>

          <TwitterShareButton
          url={`${quote.author}`}
          title={`${textQuote}`}
          hashtags={['#Quote', `${quote.author}`]}
          >
          <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <WhatsappShareButton
          url={`${quote.author}`}
          title={`${textQuote}`}
          separator="#Quote-share"
          >
          <WhatsappIcon size={40} round={true} />
          </WhatsappShareButton>
        </div>

      </div>
    </>
  )
}


export default App;
