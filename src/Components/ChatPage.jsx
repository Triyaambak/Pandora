import ChatBox from "./ChatPage/ChatBox";

const ChatPage = () => {
    return(
        <div className='flex flex-col items-center bg-gray-100 w-full p-6 overflow-y-auto'>
            <ChatBox />
        </div>
    )
}

export default ChatPage;