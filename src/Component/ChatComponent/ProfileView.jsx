import {  useSelector } from "react-redux";
const ProfileView = () => {
    const data = useSelector((value) => {
        return value.UserDetail;
      });
  return (
 <>
   <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div className="h-20 w-20 rounded-full border overflow-hidden">
                <div className="flex h-20 w-20   bg-gray-200 rounded-full justify-center items-center">
                {data.length <=0? "":data[0].username.charAt(0).toUpperCase()  }
                </div>
              </div>
              <div className="text-sm font-semibold mt-2">{data.length <=0? "":data[0].username  }</div>
              <div className="text-xs text-gray-500">No designation</div>
            </div>
 </>
  )
}

export default ProfileView
