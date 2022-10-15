const UserCard = (props) => {
    return (
        <div className='flex flex-wrap justify-center'>
            {props.userData.map(follower => {
                return (
                    <div className='flex flex-col items-center my-4 mx-4 py-2 px-2 bg-white rounded'>
                        <img className='user-img rounded' src={follower.avatar_url} alt='Follower Avatar' />
                        <h2 className='text-center text-lg font-bold' key={follower.id}>{follower.login}</h2>
                    </div>
                )
            })}
        </div>
    )  
}

export default UserCard;