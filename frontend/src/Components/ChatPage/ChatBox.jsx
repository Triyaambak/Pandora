import ChatInput from "./ChatInput";

const ChatBox = ({ chatting }) => {
    return (
        <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-evenly">
            <div className=" w-5/6 ml-10 mt-12 mr-10 h-5/6 bg-white bg-opacity-5 rounded-2xl flex flex-col justify-between items-center text-white"></div>
            <ChatInput chatting={chatting} />
        </div>
    );
};

export default ChatBox;
