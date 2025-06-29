import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AnimatePing, Button } from "../components";
import { MicIcon, ResetIcon } from "../assets";

const TextArea = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(transcript);
    setText(transcript);
    countCharacters(transcript);
  }, [transcript]);

  const countCharacters = (text) => {
    const characterCount = text.length;
    setCount(characterCount);
  };

  const handleRecord = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-US",
    });

  return (
    <div className="container">
      <p className="flex my-4 items-center">
        Microphone :{listening ? <AnimatePing /> : "Off"}
      </p>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <p>{count}/100</p>

      <div className="flex gap-2 my-4">
        <Button
          onClick={listening ? SpeechRecognition.stopListening : handleRecord}
          icon={listening ? <AnimatePing /> : <MicIcon />}
        >
          Record
        </Button>

        <Button onClick={resetTranscript} icon={<ResetIcon />}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TextArea;
