import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import './Header.css';
import {useStateValue} from './StateProvider';

export default function Header(){
    const [{user}] = useStateValue();
    return (
        <div className='header'>
            <div className='header_left'>
                {/* logged in user avatar */}
                <Avatar className='header_avatar'
                alt={user?.displayName}
                src={user?.photoURL}
                />

                {/* time icon */}
                <AccessTimeIcon/>
            </div>
            <div className='header_search'>
                <SearchIcon/>
                <input placeholder='Search for groups'/>
            </div>
            <div className='header_right'>
                <HelpOutlineIcon/>
            </div>
        </div>
    )
}

