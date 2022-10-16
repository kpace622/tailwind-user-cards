import React, { useState } from 'react';
import CardModal from './CardModal';

const UserCard = (props) => {
    const [show, setShow] = useState(false);
    const [clickedUser, setClickedUser] = useState();

    const showModal = (user) => {
        setClickedUser(user);
        setShow(!show);
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {props.userData.map(follower => {
                return (
                    <div key={follower.id} className='flex flex-col items-center my-4 mx-4 py-2 px-2 bg-white rounded hover:cursor-pointer' onClick={(e) => showModal(follower)}>
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