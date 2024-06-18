import ChatInput from "./ChatInput";

const ChatBox = () => {
    return (
        <div className='w-full h-full bg-gray-800 rounded-2xl overflow-hidden p-6'>
            <div className="w-auto ml-10 mt-5 mr-10 h-5/6 bg-white bg-opacity-5 rounded-2xl flex flex-col justify-between items-center text-white">
                
            </div>
            <ChatInput />
        </div>
    );
}

export default ChatBox;
