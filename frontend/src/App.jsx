import { useState } from 'react'
import ChatPage from './Components/ChatPage'
import SideBar from './Components/SideBar'

const App = () => {
  const [chatting, setChatting] = useState(false);
  console.log(chatting);
  return( 
    <div className='flex h-screen'>
      <SideBar
        setChatting={setChatting}
      />
      <ChatPage
        chatting={chatting}
      />
    </div>
  )
}

export default App
