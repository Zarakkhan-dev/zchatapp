import { useContext} from "react"
import { useSelector } from "react-redux"
import { Conversation } from "../../Module/Dashboard";
const ContactList = () => {
  const {setConversationID} = useContext(Conversation);
  const data = useSelector((value) => {
    return value.friendlist
  });
const handler = (id)=>{
  setConversationID(id);

}
  return (
<>
<div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
         {  data && data[0] && Array.isArray(data[0]) ? (
          data[0].map((item ,index)=>{
            return (
              <>
              <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2" onClick={() =>handler(item.conversationId)}  key={index}>
                  <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                  {item.friendName.charAt(0).toUpperCase()}
                  </div>
                  <div className="ml-2 text-sm font-semibold">{item.friendName}</div>
                  {/* <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                    2
                  </div> */}
                </button>
                </>
            )
          })
         ) :'no Friend'}
                
              </div>
</>
  )
}

export default ContactList
