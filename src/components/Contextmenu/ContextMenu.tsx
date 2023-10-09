import React, { useContext } from "react";
import "./ContextMenu.scss";
import { ReactComponent as SourceCode } from "../../assets/images/sourcecode.svg";
import { ReactComponent as Mail } from "../../assets/images/mail.svg";
import { ReactComponent as GitHub } from "../../assets/images/github.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedin.svg";
import { ReactComponent as Share } from "../../assets/images/share.svg";
import toast, { Toaster } from "react-hot-toast";
import { store } from "../../App";
import playAudio from "../../utils/Helpers/playAudio";

export default function ContextMenu() {
  const [state, dispatch] = useContext(store);

  const copyEmail = () => {
    navigator.clipboard.writeText("sujalrsalgaonkar@gmail.com");
    toast(state.language === "english" ? "Copied E-Mail" : "Copied E-Mail!", {
      icon: "📧",
      position: "top-left",
      style: {
        border: state.darkmode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: state.darkmode ? "white" : "#1d1d1f",
        fontSize: "14px",
        backgroundColor: state.darkmode ? "#141414" : "",
      },
    });
  };

  const copyURL = () => {
    navigator.clipboard.writeText("https://twitter.com/sujalsalgaonkar");
    toast(state.language === "english" ? "Copied URL" : "Copied URL!", {
      icon: "🌐",
      position: "top-left",
      style: {
        border: state.darkmode
          ? "2px solid hsla(0,0%,51.4%,.16)"
          : "1px solid #ebebeb",
        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.225)",
        borderRadius: "14px",
        fontFamily: "Inter",
        color: state.darkmode ? "white" : "#1d1d1f",
        fontSize: "14px",
        backgroundColor: state.darkmode ? "#141414" : "",
      },
    });
  };

  return (
    <div
      className={`context-menu ${
        state.darkmode ? "dark-context-menu" : "light-context-menu"
      }`}
      id="context-menu"
    >
      <a
        target="_blank"
        href="https://github.com/Sujal-Salgaonkar/portfolio"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <SourceCode className="context-icon" />
          <h3>{state.language === "english" ? "Source Code" : "Source Code"}</h3>
        </div>
      </a>

      <a
        target="_blank"
        href="https://github.com/sujalsalgaonkar16"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <GitHub className="context-icon" />
          <h3>
            {state.language === "english" ? "Github Profile" : "GitHub Profile"}
          </h3>
        </div>
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/sujal-salgaonkar-86911325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <div className="context-menu-item">
          <LinkedIn className="context-icon linkedin" />
          <h3>
            {state.language === "english"
              ? "LinkedIn Profile"
              : "LinkedIn Profile"}
          </h3>
        </div>
      </a>

      <div
        className="context-menu-item"
        onClick={copyEmail}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <Mail className="context-icon mail" />
        <h3>
          {state.language === "english" ? "Copy E-mail" : "Copy E-Mail"}
        </h3>
      </div>

      <div
        className="context-menu-item"
        onClick={copyURL}
        onMouseDown={playAudio}
        onMouseUp={playAudio}
      >
        <Share className="context-icon share" />
        <h3>{state.language === "english" ? "Share" : "Share"}</h3>
      </div>
    </div>
  );
}