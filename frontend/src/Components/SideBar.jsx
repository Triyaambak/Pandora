import IconChatText from "../Icons/Text";
import IconMic from "../Icons/Mic";
import IconLogoutBoxLine from "../Icons/LogOut";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../utils/authContext";

const SideBar = ({ setChatting }) => {
    const navigate = useNavigate();
    const { authUser } = useAuthContext();
    return (
        <div className="w-72 bg-gray-800 text-white flex flex-col justify-between items-center">
            <div className="p-4 space-y-4 flex flex-col justify-start items-center">
                <div className="bg-white rounded-full w-40 h-40 mt-4">
                    {/* Image goes here */}
                </div>
                {authUser && (
                    <>
                        <p className="text-white font-bold text-xl text-center tracking-wide leading-relaxed">
                            {authUser.username}
                        </p>
                        <p className="text-white text-sm text-center tracking-wide leading-relaxed">
                            {authUser.gender}
                        </p>
                        <p className="text-white text-sm text-center tracking-wide leading-relaxed">
                            {authUser.email}
                        </p>
                    </>
                )}
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        onClick={() =>
                            setChatting((prevChatting) => !prevChatting)
                        }
                    />
                    <div className="swap-off">
                        <IconMic />
                    </div>
                    <div className="swap-on">
                        <IconChatText />
                    </div>
                </label>
            </div>
            <div className="mb-4 mr-auto ml-4">
                <p className="text-sm mb-4">
                    Don't Have An Account?
                    <span
                        className="cursor-pointer hover:underline transition-all"
                        onClick={() => navigate("/register")}
                    >
                        {" "}
                        Sign Up
                    </span>
                </p>
                <IconLogoutBoxLine />
            </div>
        </div>
    );
};

export default SideBar;
