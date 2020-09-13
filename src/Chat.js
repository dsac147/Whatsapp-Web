import React from 'react';
import "./Chat.css";
import {Avatar , IconButton} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    var d = new Date()
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {d.getHours()}:{d.getMinutes()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {d.getHours()}:{d.getMinutes()}
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">Sonny</span>
                    This is a message
                    <span className="chat__timestamp">
                        {d.getHours()}:{d.getMinutes()}
                    </span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" placeholder="Type a message..."/>
                    <button type="submit">Sens a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
