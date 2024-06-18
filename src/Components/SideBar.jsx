import IconChatText from "../Icons/Text";
import IconMic from "../Icons/Mic";
import IconLogoutBoxLine from "../Icons/LogOut";

const SideBar = () => {
    return(
      <div className="w-72 bg-gray-800 text-white flex flex-col justify-between items-center">
        <div className='p-4 space-y-4 flex flex-col justify-start items-center'>
          <div className="bg-white rounded-full w-40 h-40 mt-4">
            {/* Image goes here */}
          </div>    
          <p className="text-white font-bold text-xl text-center tracking-wide leading-relaxed">
            Varsha Srikanth
          </p>
          <p className="text-white text-sm text-center tracking-wide leading-relaxed">
            varshasrikanth2002@gmail.com
          </p>
          <label className="swap swap-rotate">
            <input type="checkbox" />
            <div className="swap-on">
              <IconChatText />
            </div>
            <div className="swap-off">
              <IconMic />
            </div>
          </label>
        </div>
        <div className="mb-4 mr-auto ml-4">
            <IconLogoutBoxLine />
        </div>
      </div>
      
    )
}

export default SideBar;