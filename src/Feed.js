import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";

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
            </div>
        </div>
    );
};

export default Feed;