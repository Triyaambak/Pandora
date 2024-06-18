import ChatInput from "./ChatInput";

const ChatBox = ({chatting}) => {

    return (
        <div className='w-full h-full bg-gray-800 rounded-2xl overflow-hidden p-6'>
            <div className="w-auto ml-10 mt-12 mr-10 h-5/6 bg-white bg-opacity-5 rounded-2xl flex flex-col justify-between items-center text-white">
                
            </div>
            <input type="text" placeholder={chatting? "Chat With Us" : "Talk With Us"} className=" bg-white rounded-2xl h-10 w-full mt-5 p-4"/>
        </div>
    );
}

export default ChatBox;
