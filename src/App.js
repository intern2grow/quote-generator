import './App.css';
import React, {useState} from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

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
      </div>
   <br></br>
      <WhatsappShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <TwitterShareButton
  url={'https://www.example.com'}
  quote={'Dummy text!'}
  hashtag="#muo"
>
  <TwitterIcon size={32} round />
</TwitterShareButton>
    </>
  )
}


export default App;
