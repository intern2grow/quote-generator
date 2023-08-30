import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./SocialButtons.css";

export default function SocialButtons({ quote }) {
  const sharedText = `${quote.content} - ${quote.author}`;
  return (
    <>
      <div className="social-btns">
        <a
          href={`https://twitter.com/intent/tweet?text=${sharedText}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon twitterIcon">
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${sharedText}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="social-icon whatsappIcon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
        </a>
      </div>
    </>
  );
}
