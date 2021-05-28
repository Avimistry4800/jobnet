import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css'
import bg from './Images/sidebar_bg.png'
import avatarImg from './Images/avatar.png'

const Sidebar = () => {

    const recentItem = (topic) => (
<div className="sidebar__recentItem">
    <span className="sidebar__hash">#</span>
    <p>{topic}</p>
</div>
    
    );
    return (
        
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={bg} alt="" />
                <Avatar className="sidebar__avatar" src={avatarImg}/>
                <h2>Avi Mistry</h2>
                <h4>Avimistry4800@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,974</p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                    <p className="sidebar__statNumber">2,214</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
};

export default Sidebar;