import './App.css';
import React, {useState} from 'react';
import { 
  WhatsappIcon, 
  WhatsappShareButton, 
  FacebookIcon,
  FacebookShareButton, 
  RedditShareButton, 
  RedditIcon, 
  TwitterIcon,
  TwitterShareButton, 
  EmailShareButton,
  EmailIcon} from 'react-share';

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
        // console.log(data)
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

        <div className="share-buttons">
          <RedditShareButton
            url={'https://www.reddit.com/'}
            title={quote.content} 
          >
           <RedditIcon size={40} round={true} />
          </RedditShareButton>

          <TwitterShareButton
            url={`${quote.author}.`}
            title={quote.content} 
            hashtags={quote.tags}
          >
          <TwitterIcon size={40} round={true} />
          </TwitterShareButton>

          <EmailShareButton 
            url={`${quote.author}`}
            title={quote.content}
          >
            <EmailIcon size={40} round={true} />
          </EmailShareButton>

          <WhatsappShareButton 
            title={quote.content} 
            url={`${quote.author}`}
          >
            <WhatsappIcon round={true} size={40}/>
          </WhatsappShareButton>

          <FacebookShareButton
            title={quote.content} 
            url={'https://www.facebook.com/'}
          >
            <FacebookIcon round={true} size={40}/>
          </FacebookShareButton>
      </div>
      </div>
      
    </>
  )
}


export default App;
