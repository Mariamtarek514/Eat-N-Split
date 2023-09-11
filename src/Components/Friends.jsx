import React from "react";
import Button from "./Button";

const Friends = ({ friend, onSelection, selectFriend }) => {
    const isSelect = friend.id === selectFriend?.id;
    return (
        <li className={isSelect ? "selected" : null}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    you owe {friend.name} {-friend.balance}€
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} owes you {friend.balance}€
                </p>
            )}
            {friend.balance === 0 && <p> you and {friend.name} are even</p>}
            <Button handleClick={() => onSelection(friend)}>
                {isSelect ? "Close" : "Select"}
            </Button>
        </li>
    );
};

export default Friends;
