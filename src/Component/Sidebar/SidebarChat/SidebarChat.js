import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import './SidebarChat.css';
import db from '../../../firebase';
import { Link } from 'react-router-dom';
import ImageIcon from '@material-ui/icons/Image';

function SidebarChat({ addNewChat, id, name }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    }, [id]);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat room');

        if (roomName) {
            // Doing something on database...
            db.collection('rooms').add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />

                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    {
                        (messages[0]?.type === 'str') ?
                            (
                                <p>{messages[0]?.message}</p>
                            ) :
                            (
                                <span className="sidebarChat__disp">
                                    <ImageIcon />
                                    Image
                                </span>
                            )
                    }
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add New Chat</h2>
        </div>
    )
}

export default SidebarChat
