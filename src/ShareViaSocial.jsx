import React from "react";
import { BsWhatsapp, BsFacebook, BsTwitter } from "react-icons/bs";
import "./ShareViaSocial.css";
import socialLinks from "./utils/social-links";

const ShareViaSocial = ({ quote }) => {
  return (
    <div style={{ color: "#e3e3e3", marginTop: "4px" }}>
      <BsTwitter
        className="icons"
        onClick={() => {
          socialLinks(quote, "twitter");
        }}
      />
      <BsFacebook
        className="icons"
        onClick={() => {
          socialLinks(quote, "facebook");
        }}
      />
      <BsWhatsapp
        className="icons"
        onClick={() => {
          socialLinks(quote, "whatsapp");
        }}
      />
    </div>
  );
};

export default ShareViaSocial;
