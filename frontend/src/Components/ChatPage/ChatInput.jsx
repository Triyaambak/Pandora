import { useRef, useState } from "react";
import IconMic from "../../Icons/Mic";
import { useSocketContext } from "../../utils/socketContext";
import audioFilePath from "../../../temp/audioOutput.mp3";

const ChatInput = ({ chatting }) => {
    const { socket } = useSocketContext();
    const [recording, setRecording] = useState();
    const [chatInput, setChatInput] = useState("");
    const mediaRecorderRef = useRef();
    const chunksRef = useRef([]);
    const play = (audioFilePath) => {
        new Audio(audioFilePath).play();
    };
    const handleKeyPress = (event) => {
        if (event.target === "Enter") alert("hey");
    };
    const handleChatInputChange = (event) => {
        setChatInput(event.target.value);
    };
    const handleMicClick = async () => {
        if (!recording) {
            console.log("Started recording");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = (event) => {
                    chunksRef.current.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(chunksRef.current, {
                        type: "audio/webm",
                    });
                    chunksRef.current = [];
                    socket.emit("speechToText", audioBlob, (res) => {
                        socket.emit("textToSpeech", res, () => {
                            play(audioFilePath);
                        });
                    });
                };
                mediaRecorder.start();
                setRecording(true);
            } catch (err) {
                console.error("Error accessing microphone", err);
            }
        } else {
            mediaRecorderRef.current.stop();
            setRecording(false);
            console.log("Stopped recording");
        }
    };
    return (
        <>
            {chatting ? (
                <input
                    type="text"
                    placeholder="Chat With Us"
                    className=" bg-white rounded-2xl h-10 w-full mt-5 p-4"
                    value={chatInput}
                    onChange={handleChatInputChange}
                    onKeyDown={handleKeyPress}
                />
            ) : (
                <IconMic
                    className="mt-5"
                    onClick={handleMicClick}
                />
            )}
        </>
    );
};

export default ChatInput;
