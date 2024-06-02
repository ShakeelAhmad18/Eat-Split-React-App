import React from 'react'
import Friend from './Friend';

const Friendlist = ({friend,onSelected,onSelectedFriend}) => {
    return (
       
            <ul>
                {friend.map((friend) => (
                    <Friend friend={friend} key={friend} onSelected={onSelected} onSelectedFriend={onSelectedFriend}/>
                ))}
            </ul>

    )
}

export default Friendlist
