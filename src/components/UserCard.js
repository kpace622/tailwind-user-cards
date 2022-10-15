// import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import React, { useState } from 'react';
import CardModal from './CardModal';

const UserCard = (props) => {
    const [show, setShow] = useState(false);
    const [clickedUser, setClickedUser] = useState();

    const showModal = (user) => {
        console.log('user', user)
        if(user) {
            getUserInfo(user)
        }

        setShow(!show);
    }

    const getUserInfo = (user) => {
        axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            setClickedUser(res.data)
        })
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {props.userData.map(follower => {
                return (
                    <div key={follower.id} className='flex flex-col items-center my-4 mx-4 py-2 px-2 bg-white rounded' onClick={(e) => showModal(follower.login)}>
                        <img className='user-img rounded' src={follower.avatar_url} alt='Follower Avatar' />
                        <h2 className='text-center text-lg font-bold' key={follower.id}>{follower.login}</h2>
                    </div>
                )
            })}
            <CardModal userUrl={clickedUser} showModal={show} onClose={showModal}/>
        </div>
    )  
}

export default UserCard;