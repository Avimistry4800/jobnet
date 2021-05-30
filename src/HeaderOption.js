import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css'

const HeaderOption = ({Icon, avatar, title, onClick, user }) => {
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && 
            (<Avatar className='headerOption__icon' src={user?.photoUrl}>{user.email[0]}</Avatar>)
            }
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    );
};

export default HeaderOption;