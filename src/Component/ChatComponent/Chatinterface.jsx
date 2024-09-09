import "./chat_interface.css";
import Chatbox from "./chatbox";

const Chatinterface = () => {
  return (
    <>
      <div className="flex flex-col flex-auto h-full p-6">
        <Chatbox />
      </div>
    </>
  );
};

export default Chatinterface;
