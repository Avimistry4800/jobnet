import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from './InputOption';


const Feed = () => {
const [input, setInput] =useState('')

const [posts, setPosts] = useState([]);

useEffect(() =>{
    db.collection("posts").onSnapshot((snapshot) => 
        setPosts(
            snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),  
        })))
    
    );
},[]);

const sendPost = (e) =>{
    e.preventDefault();

    db.collection("posts").add({
        name: 'Avi Mistry',
        description: 'This is test',
        message: ''
    })
}
// Firebase 




    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title='photo' color="#7085F9" />
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
                </div>
            </div>
        </div>
    );
};

export default Feed;