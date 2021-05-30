import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Jlogo from './Images/logo.png'
import avatar from './Images/avatar.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase';

const Header = () => {
    const user = useSelector(selectUser)
    const dispatch =useDispatch()

    const logOutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className='header'>
            <div className="header__left">
                <img src={Jlogo} alt="" />

                <div className="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input placeholder="search" type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption avatar= {avatar} title='Me'
                onClick= {logOutOfApp}
                />
                
            </div>
        </div>
    );
};

export default Header;