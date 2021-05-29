import React, { useState, useEffect } from 'react';
import { db } from './Firebase';

const Feed = () => {
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
        description: 'This is test'
    })
}
// Firebase 




    return (
        <div>
            
        </div>
    );
};

export default Feed;