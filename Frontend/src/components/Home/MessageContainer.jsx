import React from 'react'
import User from './user'
import Message from './Message'
import { IoMdSend } from "react-icons/io";
const MessageContainer = () => {
  return (
    <div className=' h-screen w-full flex flex-col'>
       <div className="  p-3  border-b-white/10">
                <User />   
            </div>

            <div className='h-full overflow-y-auto p-3'>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
             {/* Input box */}
      <div className="w-full p-3 border-t border-white/10 flex gap-2 items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="input input-primary w-full"
        />
        <button className="btn btn-square btn-primary">
          <IoMdSend />
        </button>
      </div>
    </div>
  )
}

export default MessageContainer
