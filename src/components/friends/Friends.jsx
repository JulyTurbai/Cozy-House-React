import React, { useEffect, useState } from 'react';
import Friend from '../friend/Friend';
import './Friends.scss';
import './FriendsMedia.scss';
import ModalWindow from '../modal/ModalWindow';


const url = {
    animals: 'http://localhost:3000/animals'
}

const Friends = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        fetch(url.animals)
         .then(res => res.json())
         .then(data => setFriends(data))
    }, [])
   
    return (
        <div className="friends">
            <div className="container">
                <div className="friends-block">
                    <h2 className="head-text">
                        Our friends who<br/>
                        are looking for a house
                    </h2>
                    <div className="friends-content">
                        <div className="pets">
                            {
                                friends.map(friend => <Friend key={ friend.id }friend={ friend }/>)
                            }
                        </div>
                    </div> 
                    <div className="button-block">
                        <button className="button-know">
                            Get to know the rest
                        </button>
                    </div>
                </div>
            </div>
            <ModalWindow />
        </div>
    );
};

export default Friends;