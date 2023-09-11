import React from "react";

import Friends from "./Friends";
const ListOfFriends = ({ friends, onSelection, selectFriend }) => {
    return (
        <ul>
            {friends.map((friend) => (
                <Friends
                    key={friend.id}
                    friend={friend}
                    onSelection={onSelection}
                    selectFriend={selectFriend}
                />
            ))}
        </ul>
    );
};

export default ListOfFriends;
