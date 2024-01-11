import "./App.css";
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const [translate, setTranslate] = useState("");

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const copytoClipboard = async () => {
    setTranslate(transcript);
    await navigator.clipboard.writeText(translate);
  };

  const StartSpeak = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  console.log(translate);
  const StopSpeak = () => {
    SpeechRecognition.stopListening({ continuous: true, language: "en-IN" });
    setTranslate(transcript);
  };

  return (
    <div className="body__box">
      <h1> Hey Buddy I am Speech to Text Converter </h1>{" "}
      <div className="main__container">
        {" "}
        {transcript}{" "}
        <div className="btn_bar">
          <button onClick={copytoClipboard}> Copy to ClipBoard </button>{" "}
          <button onClick={StartSpeak}> Listen </button>{" "}
          <button onClick={StopSpeak}> Stop </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
